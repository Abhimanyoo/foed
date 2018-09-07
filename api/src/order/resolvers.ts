import { Context } from '../context';
import { OrderStatus } from '../generated/prisma';
import { sendNotification } from '../utils/push';

interface PlaceOrderInput {
  items: { cardItem: string; options: string[]; restaurant: string }[];
  tip: number;
  subscription?: string;
}

export const Mutation = {
  async placeOrder(
    parent: any,
    { data }: { data: PlaceOrderInput },
    ctx: Context,
    info: any
  ) {
    // TODO: this can probably be improved for performance; first fetch all required data and then loop through data.items.
    const lastOrders = await ctx.db.query.orders({
      orderBy: 'number_DESC',
      first: 1,
    });

    let lastOrderNumber = 1;
    if (lastOrders.length > 0 && lastOrders[0].number) {
      lastOrderNumber = lastOrders[0].number! + 1;
    }

    const order = {
      number: lastOrderNumber,
      items: { create: [] as any[] },
      tip: data.tip,
      subscription: data.subscription,
    };

    for (const itemInput of data.items) {
      const cardItem = await ctx.db.query.cardItem({
        where: { id: itemInput.cardItem },
      });
      if (!cardItem) {
        throw new Error(`Cannot find card item ${itemInput.cardItem}`);
      }
      const cardOptions = await ctx.db.query.cardItemOptions({
        where: { id_in: itemInput.options },
      });

      let subtotal = cardItem.price;

      const optionConnects: any[] = [];
      for (const cardOption of cardOptions) {
        subtotal += cardOption.price;

        optionConnects.push({ id: cardOption.id });
      }

      order.items.create.push({
        subtotal,
        cardItem: { connect: { id: cardItem.id } },
        options: { connect: optionConnects },
        restaurant: { connect: { id: itemInput.restaurant } },
      });
    }

    return await ctx.db.mutation.createOrder({ data: order }, info);
  },
  async completeOrderItem(
    parent: any,
    { ids, complete }: { ids: string[]; complete: boolean },
    ctx: Context,
    info: any
  ) {
    await ctx.db.mutation.updateManyOrderItems(
      {
        where: { id_in: ids },
        data: { completedAt: complete ? new Date() : (null as any) },
      },
      info
    );
    return ctx.db.query.orderItems({ where: { id_in: ids } });
  },
  async changeOrderStatus(
    parent: any,
    { id, status }: { id: string; status: OrderStatus },
    ctx: Context,
    info: any
  ) {
    if (status === 'COMPLETED') {
      const order = await ctx.db.query.order({ where: { id } });
      if (order && order.subscription) {
        sendNotification(order.subscription, 'Your order is ready!');
      }
    }
    return await ctx.db.mutation.updateOrder(
      {
        where: { id },
        data: { status },
      },
      info
    );
  },
};

export const Query = {
  async unfinishedRestaurantOrders(
    parent: any,
    { restaurantId }: { restaurantId: string },
    ctx: Context,
    info: any
  ) {
    return ctx.db.query.orders(
      {
        where: {
          status_in: ['IN_PROGRESS', 'COMPLETED'],
          items_some: {
            restaurant: { id: restaurantId },
          },
        },
      },
      info
    );
  },
  async orders(
    parent: any,
    { ids }: { ids: string[] },
    ctx: Context,
    info: any
  ) {
    return ctx.db.query.orders({ where: { id_in: ids } }, info);
  },
};
