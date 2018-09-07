import { forwardTo } from 'prisma-binding';
import { Context } from '../context';
import { generateSlug } from '../utils/slug';

export const Mutation = {
  createRestaurant: forwardTo('db'),
  updateRestaurant: forwardTo('db'),
  deleteRestaurant: forwardTo('db'),
};

export const Query = {
  restaurant: forwardTo('db'),
  restaurants: forwardTo('db'),
  restaurantsConnection: forwardTo('db'),
  async generateRestaurantSlug(
    parent: any,
    { name }: { name: string },
    ctx: Context,
    info: any
  ) {
    return await generateSlug(name, slug =>
      ctx.db.query.restaurant({ where: { slug } })
    );
  },
};
