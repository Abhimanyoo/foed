import * as H from 'history';

export const PER_PAGE = 10;

export function getPageInfo({ location }: { location: H.Location }) {
  const search = new URLSearchParams(location.search);
  const page = parseInt(search.get('page') || '') || 1;
  return {
    first: PER_PAGE,
    skip: (page - 1) * PER_PAGE,
  };
}
