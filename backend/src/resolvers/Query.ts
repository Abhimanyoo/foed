import { getUserId, forwardTo } from '@volst/prisma-auth';
import { Context, generateSlug } from '../utils';

export const Query = {
  user: forwardTo({}),
  users: forwardTo({}),
  usersConnection: forwardTo({}),
  restaurant: forwardTo({ unauthorized: true }),
  restaurants: forwardTo({ unauthorized: true }),
  restaurantsConnection: forwardTo({ unauthorized: true }),
  organization: forwardTo({ unauthorized: true }),
  organizations: forwardTo({ unauthorized: true }),
  organizationsConnection: forwardTo({ unauthorized: true }),
  employments: forwardTo({}),
  employmentsConnection: forwardTo({}),
  card: forwardTo({}),
  cards: forwardTo({}),
  cardsConnection: forwardTo({}),
  async generateRestaurantSlug(
    parent: any,
    { name }: { name: string },
    ctx: Context,
    info: any
  ) {
    getUserId(ctx);

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
    getUserId(ctx);

    return await generateSlug(name, slug =>
      ctx.db.query.organization({ where: { slug } })
    );
  },
};
