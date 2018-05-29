import { forwardTo } from 'prisma-binding';
import { Context, generateSlug } from '../utils';

export const Query = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  usersConnection: forwardTo('db'),
  restaurant: forwardTo('db'),
  restaurants: forwardTo('db'),
  restaurantsConnection: forwardTo('db'),
  organization: forwardTo('db'),
  organizations: forwardTo('db'),
  organizationsConnection: forwardTo('db'),
  employments: forwardTo('db'),
  employmentsConnection: forwardTo('db'),
  card: forwardTo('db'),
  cards: forwardTo('db'),
  cardsConnection: forwardTo('db'),
  cardCategory: forwardTo('db'),
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
  async generateOrganizationSlug(
    parent: any,
    { name }: { name: string },
    ctx: Context,
    info: any
  ) {
    return await generateSlug(name, slug =>
      ctx.db.query.organization({ where: { slug } })
    );
  },
};
