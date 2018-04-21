import * as jwt from 'jsonwebtoken';
import { Prisma } from '../generated/prisma';
import { GraphQLResolveInfo } from 'graphql';
import { forwardTo as pForwardTo } from 'prisma-binding';

export interface Context {
  db: Prisma;
  request: any;
}

export function getUserId(ctx: Context): string {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET || '') as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export function getUser(ctx: Context): Promise<any> {
  return ctx.db.query.user({ where: { id: getUserId(ctx) } });
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

// TODO: we might want to add some parameters to easily add permissions or whatever.
export function forwardTo({
  unauthorized,
  bindingName,
}: {
  unauthorized?: boolean;
  bindingName?: string;
}) {
  return (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    if (!unauthorized) {
      getUserId(ctx);
    }
    return pForwardTo(bindingName || 'db')(parent, args, ctx, info);
  };
}
