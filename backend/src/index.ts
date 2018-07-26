import { ApolloServer } from 'apollo-server';
import { Prisma } from 'prisma-binding';
import * as resolvers from './resolvers';
import { email } from './mailer';
import { graphqlAuthenticationConfig } from 'graphql-authentication';
import { GraphqlAuthenticationPrismaAdapter } from 'graphql-authentication-prisma';
import { applyMiddleware } from 'graphql-middleware';
import { permissions } from './permissions';
import { getSchema } from './schema';

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

const debug = process.env.NODE_ENV !== 'production';

const schema = applyMiddleware(getSchema(resolvers), permissions);

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  debug,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.BACKEND_PRISMA_ENDPOINT,
      secret: process.env.BACKEND_PRISMA_SECRET,
      debug,
    }),
    graphqlAuthentication: graphqlAuthenticationConfig(authOptions),
  }),
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
