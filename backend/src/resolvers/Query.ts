import { getUserId, Context, forwardTo } from '../prisma-auth';
import { generateSlug } from '../utils';

export const Query = {
  currentUser(parent: any, args: any, ctx: Context, info: any) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  user: forwardTo({}),
  users: forwardTo({}),
  usersConnection: forwardTo({}),
  restaurant: forwardTo({}),
  restaurants: forwardTo({}),
  restaurantsConnection: forwardTo({}),
  organization: forwardTo({}),
  organizations: forwardTo({}),
  organizationsConnection: forwardTo({}),
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
