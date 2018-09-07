import * as card from './card/resolvers';
import * as file from './file/resolvers';
import * as order from './order/resolvers';
import * as organization from './organization/resolvers';
import * as restaurant from './restaurant/resolvers';
import * as user from './user/resolvers';
import { authQueries, authMutations } from 'graphql-authentication';

const auth = { Query: authQueries, Mutation: authMutations };

const resolverModules = [
  auth,
  card,
  file,
  order,
  organization,
  restaurant,
  user,
];

export const resolvers = { Query: {}, Mutation: {} };

resolverModules.map(resolver => {
  Object.assign(resolvers.Query, resolver.Query);
  Object.assign(resolvers.Mutation, resolver.Mutation);
});
