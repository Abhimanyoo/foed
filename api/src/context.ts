import { Prisma } from './generated/prisma';
import { IGraphqlAuthenticationConfig } from 'graphql-authentication/dist/Config';

export interface Context {
  db: Prisma;
  request: any;
  graphqlAuthentication: IGraphqlAuthenticationConfig;
}
