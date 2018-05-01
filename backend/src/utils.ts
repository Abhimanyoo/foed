import * as speakingurl from 'speakingurl';
import { Prisma } from './generated/prisma';

export interface Context {
  db: Prisma;
  request: any;
}

export async function generateSlug(
  name: string,
  query: (slug: string) => Promise<any>
) {
  const originalSlug = speakingurl(name);

  let counter = 0;
  async function checkFreeSlug() {
    const slug = counter === 0 ? originalSlug : `${originalSlug}-${counter}`;
    const result = await query(slug);
    if (result) {
      counter += 1;
      return await checkFreeSlug();
    }
    return { slug };
  }

  return checkFreeSlug();
}
