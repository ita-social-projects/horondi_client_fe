import React from 'react';

import HotItemFilter from '../product-list-filter/hot-item-filter/hot-item-filter';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
jest.mock('../product-list-filter/product-list-filter.styles.js', () => ({
  useStyles: () => ({})
}));

describe('HotItemFilter component tests', () => {
  it('Should render HotItemFilter', () => {
    const component = shallow(<HotItemFilter />);
    expect(component).toBeDefined();
  });
});
