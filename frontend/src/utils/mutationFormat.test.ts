import { create, connect, mutationFormat } from './mutationFormat';

test('mutationFormat - basic', () => {
  const values = {
    name: 'Summer season',
    organization: 'organization-1',
  };
  const scheme = {
    organization: connect,
  };
  const formatted = mutationFormat(values, scheme);

  expect(formatted).toEqual({
    name: 'Summer season',
    organization: { connect: { id: 'organization-1' } },
  });
});

test('mutationFormat - advanced', () => {
  const values = {
    categories: [
      {
        id: 'category-1',
        name: 'Drinks',
        items: [
          {
            name: 'Coca cola',
          },
          {
            name: 'Beer',
            toppings: [
              {
                name: 'Lemon',
              },
            ],
          },
        ],
      },
    ],
  };
  const scheme = {
    categories: {
      __format: create,
      items: {
        __format: create,
        toppings: create,
      },
    },
  };
  const formatted = mutationFormat(values, scheme);

  expect(formatted).toEqual({
    categories: {
      create: [
        {
          id: 'category-1',
          name: 'Drinks',
          items: {
            create: [
              {
                name: 'Coca cola',
              },
              {
                name: 'Beer',
                toppings: {
                  create: [{ name: 'Lemon' }],
                },
              },
            ],
          },
        },
      ],
    },
  });
});
