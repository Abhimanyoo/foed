import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import * as resolvers from './resolvers';
import { email } from './mailer';
import { graphqlAuthenticationConfig } from 'graphql-authentication';
import { GraphqlAuthenticationPrismaAdapter } from 'graphql-authentication-prisma';
import { permissions } from './permissions';
import { typeDefs } from './schema';

const authOptions = {
  adapter: new GraphqlAuthenticationPrismaAdapter(),
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
  typeDefs: typeDefs(),
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  middlewares: [permissions],
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.BACKEND_PRISMA_ENDPOINT,
      secret: process.env.BACKEND_PRISMA_SECRET,
      debug: true,
    }),
    graphqlAuthentication: graphqlAuthenticationConfig(authOptions),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
