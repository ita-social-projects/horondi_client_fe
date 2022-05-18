const mockedFilters = {
  categories: [
    {
      _id: '6043bdeb3e06ad3edcdb7b2d',
      name: [
        {
          value: 'Рюкзаки'
        },
        {
          value: 'Backpacks'
        }
      ]
    }
  ]
};

const mockedFilterParams = {
  price: [800, 3600]
};

const mockedQueryName = 'categoryFilter';

const mockedEvent = {
  target: {
    name: 'Backpacks',
    checked: true
  }
};

export const mocks = {
  mockedFilterParams,
  mockedFilters,
  mockedQueryName,
  mockedEvent
};
