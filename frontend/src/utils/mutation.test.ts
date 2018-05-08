import { parseQueryResultsToForm } from './mutation';

test('parseQueryResultsToForm - basic', () => {
  const input = {
    __typename: 'Card',
    id: 'card-1',
    name: 'Summer season',
    categories: [
      {
        id: 'category-1',
        name: 'Burgers',
        items: [],
        __typename: 'CardCategory',
      },
      {
        id: 'category-2',
        name: 'Drinks',
        items: [
          {
            id: 'item-1',
            name: 'Beer',
            subitems: [],
            __typename: 'CardItem',
          },
        ],
        __typename: 'CardCategory',
      },
    ],
  };
  const output = parseQueryResultsToForm(input, {});

  expect(output).toEqual({
    name: 'Summer season',
    organization: { connect: { id: 'organization-1' } },
  });
});
