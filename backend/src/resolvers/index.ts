import { Query } from './Query';
import { Mutation } from './Mutation';
import { authQueries, authMutations } from '@volst/prisma-auth';
import { email } from '../mailer';
import { Context } from '../utils';

const options = {
  mailer: email,
  mailAppUrl: process.env.BACKEND_MAIL_APP_URL,
  hookInviteUserPostCreate(data: any, ctx: Context, user: any) {
    const hasRestaurant =
      !!user.employments &&
      user.employments.some(e => e.restaurant.id === data.restaurantId);
    if (hasRestaurant) {
      throw new Error('User with email already exists in this restaurant');
    }
    return ctx.db.mutation.createEmployment({
      data: {
        permission: data.permission,
        user: { connect: { id: user.id } },
        restaurant: { connect: { id: data.restaurantId } },
      },
    });
  },
};

module.exports = {
  Query: {
    ...authQueries(),
    ...Query,
  },
  Mutation: {
    ...authMutations(options),
    ...Mutation,
  },
};
