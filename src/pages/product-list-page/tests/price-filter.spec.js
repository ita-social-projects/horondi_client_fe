import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DollarIcon } from '../../../images/profile-icons';
import PriceFilter from '../product-list-filter/price-filter/price-filter';

const mockGetPriceWithCurrency = jest.fn((value) => value);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const mockGetBaseCurrencyPrice = jest.fn((value) => value);
const dispatch = jest.fn();

jest.mock('react-redux');
jest.mock('../product-list-filter/product-list-filter.styles.js', () => ({
  useStyles: () => ({})
}));

const mockHistory = {
  push: jest.fn()
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => mockHistory
}));

useDispatch.mockImplementation(() => dispatch);

useSelector.mockImplementation(() => ({
  filters: [],
  maxPrice: 0,
  minPrice: 0
}));

jest.mock('../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign,
    getBaseCurrencyPrice: mockGetBaseCurrencyPrice
  })
}));

describe('PriceFilter component tests', () => {
  it('Should render PriceFilter', () => {
    const component = shallow(<PriceFilter priceRange={{ minPrice: 1, maxPrice: 10 }} />);
    expect(component).toBeDefined();
  });

  it('first price text box value should equal 1', () => {
    const component = mount(<PriceFilter priceRange={{ minPrice: 1, maxPrice: 10 }} />);
    const textfield = component.find(`[id='0']`);
    expect(textfield.at(0).props().value).toEqual(1);
  });

  it('slider min value should equal 0', () => {
    const component = shallow(<PriceFilter priceRange={{ minPrice: 0, maxPrice: 10 }} />);
    const textfield = component.find(`[id='slider']`);
    expect(textfield.at(0).props().min).toEqual(0);
  });

  it('history.push should be called after changing slider value', () => {
    const component = mount(<PriceFilter priceRange={{ minPrice: 0, maxPrice: 10 }} />);
    const slider = component.find('#slider').at(0);
    slider.simulate('click');
    setTimeout(() => expect(mockHistory.push).toHaveBeenCalled(), 1000);
  });

  it('first price text box should change value after onChange handler called', () => {
    const component = shallow(<PriceFilter priceRange={{ minPrice: 1, maxPrice: 10 }} />);
    const textfield = component.find(`[id='0']`).at(0);
    textfield.simulate('change', { target: { id: 0, value: '100' } });
    setTimeout(() => expect(textfield.props().value).toEqual(100));
  });
});
