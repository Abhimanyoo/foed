export const PER_PAGE = 10;

export function getPageInfo(query: any) {
  const page = parseInt(query.page) || 1;
  return {
    first: PER_PAGE,
    skip: (page - 1) * PER_PAGE,
  };
}
