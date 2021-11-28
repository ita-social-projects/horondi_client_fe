import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item';
import { mockQueryData, props } from './cart-item.variables';

jest.mock('react-redux');
jest.mock('../cart-item.styles', () => ({ useStyles: () => ({}) }));
const dispatch = jest.fn();

function testSelection(loading) {
  useSelector.mockImplementation(() => ({
    language: 0,
    currency: 0,
    list: [],
    loading,
    quantityLoading: loading,
    totalPrice: 100,
    userData: {}
  }));
}

useDispatch.mockImplementation(() => dispatch);

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light',
      cart: {
        borderColor: '#000000'
      }
    }
  }),
  useStyles: () => ({
    palette: {
      type: 'light',
      cart: {
        borderColor: '#000000'
      }
    }
  })
}));

let component;
const mockChangeQuantity = jest.fn();
const mockCartOperations = { changeQuantity: mockChangeQuantity };

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({ loading: false, error: null, data: { getProductById: mockQueryData } })
}));

describe('Filled cart component tests', () => {
  it('should render CartItem ', () => {
    testSelection(false);
    component = shallow(<CartItem {...props} cartOperations={mockCartOperations} />);
    expect(component).toBeDefined();
  });
});
