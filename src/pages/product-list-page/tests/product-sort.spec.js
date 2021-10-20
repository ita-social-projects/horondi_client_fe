import React from 'react';
import ProductSort from '../product-sort/product-sort';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

describe('ProductSort component tests', () => {
  it('Should render ProductSort', () => {
    const component = shallow(<ProductSort />);
    expect(component).toBeDefined();
  });
});
