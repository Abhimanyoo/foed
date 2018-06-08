import { forwardTo } from 'prisma-binding';
import { upload } from 'now-storage';
import * as streamToArray from 'stream-to-array';
import * as sharp from 'sharp';
import { Context } from '../utils';

interface PlaceOrderInput {
  items: { cardItem: string; subitems: string[] }[];
  tip: number;
}

export const Mutation = {
  createRestaurant: forwardTo('db'),
  updateRestaurant: forwardTo('db'),
  deleteRestaurant: forwardTo('db'),
  createOrganization: forwardTo('db'),
  updateOrganization: forwardTo('db'),
  deleteOrganization: forwardTo('db'),
  deleteEmployment: forwardTo('db'),
  createCard: forwardTo('db'),
  updateCard: forwardTo('db'),
  deleteCard: forwardTo('db'),
  imageUpload: async (obj, { file }, ctx) => {
    const { filename, stream } = await file;
    const buffers = await streamToArray(stream);
    const originalContent = Buffer.concat(buffers);

    const content = await sharp(originalContent)
      .resize(225, 225)
      .background('black')
      .jpeg({
        quality: 70,
        chromaSubsampling: '4:4:4',
      })
      .toBuffer();

    // TODO: needs better error handling
    // TODO: add a max file size
    const { url } = await upload(
      process.env.BACKEND_NOW_TOKEN,
      {
        name: filename,
        content,
      },
      {
        deploymentName: 'foed-media',
        teamId: 'volst',
      }
    );
    return { url: `https://${url}` };
  },
  async placeOrder(
    parent: any,
    { data }: { data: PlaceOrderInput },
    ctx: Context,
    info: any
  ) {
    // TODO: this can probably be improved for performance; first fetch all required data and then loop through data.items.
    const order = {
      items: { create: [] as any[] },
      subtotal: 0,
      tip: data.tip,
    };

    for (const itemInput of data.items) {
      const cardItem = await ctx.db.query.cardItem({
        where: { id: itemInput.cardItem },
      });
      if (!cardItem) {
        throw new Error(`Cannot find card item ${itemInput.cardItem}`);
      }
      const cardSubItems = await ctx.db.query.cardSubitems({
        where: { id_in: itemInput.subitems },
      });

      const subItemConnects: any[] = [];
      for (const cardSubitem of cardSubItems) {
        order.subtotal += cardSubitem.price;

        subItemConnects.push({ id: cardSubitem.id });
      }

      order.subtotal += cardItem.price;

      order.items.create.push({
        cardItem: { connect: { id: cardItem.id } },
        subitems: { connect: subItemConnects },
      });
    }

    const actualOrder = await ctx.db.mutation.createOrder({ data: order });

    return {
      id: actualOrder.id,
      price: order.tip + order.subtotal,
    };
  },
};
