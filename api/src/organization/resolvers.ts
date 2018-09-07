import { forwardTo } from 'prisma-binding';
import { Context } from '../context';
import { generateSlug } from '../utils/slug';

export const Mutation = {
  createOrganization: forwardTo('db'),
  updateOrganization: forwardTo('db'),
  deleteOrganization: forwardTo('db'),
};

export const Query = {
  organization: forwardTo('db'),
  organizations: forwardTo('db'),
  organizationsConnection: forwardTo('db'),
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
