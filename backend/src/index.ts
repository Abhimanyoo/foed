import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import * as resolvers from './resolvers';
import { email } from './mailer';
import { prismaAuthConfig } from '@volst/prisma-auth';

const authOptions = {
  mailer: email,
  mailAppUrl: process.env.BACKEND_MAIL_APP_URL,
  secret: process.env.BACKEND_APP_SECRET || '',
  hookInviteUserPostCreate(data: any, ctx: any, user: any) {
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

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.BACKEND_PRISMA_ENDPOINT,
      secret: process.env.BACKEND_PRISMA_SECRET,
      debug: true,
    }),
    prismaAuth: prismaAuthConfig(authOptions),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
