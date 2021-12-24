import { shallow } from 'enzyme';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item';
import { mockQueryData, mockQueryDataConstructor, props, item } from './cart-item.variables';

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
const mockGetCartItem = jest.fn(() => props.itemData);
const mockChangeSize = jest.fn();
const mockCartOperations = {
  changeQuantity: mockChangeQuantity,
  getCartItem: mockGetCartItem,
  changeSize: mockChangeSize
};

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({
    loading: false,
    error: null,
    data: { getProductById: mockQueryData, getConstructorById: mockQueryDataConstructor }
  })
}));

beforeEach(() => {
  testSelection(false);
  component = shallow(<CartItem {...props} cartOperations={mockCartOperations} />);
});

describe('Filled cart component tests', () => {
  it('should render CartItem', () => {
    expect(component).toBeDefined();
  });

  it('Select', () => {
    const select = component.find({ name: 'size' });
    select.simulate('change', { target: { value: 'L' } });
  });

  it('Select', () => {
    item.constructor = false;
    component = shallow(<CartItem {...props} cartOperations={mockCartOperations} />);
    const select = component.find({ name: 'size' });
    select.simulate('change', { target: { value: 'L' } });
  });
  it('should change select value', () => {
    testSelection(false);
    component = shallow(<CartItem {...props} cartOperations={mockCartOperations} />);
    const select = component.find(`[name='size']`);
    select.props().onChange({ target: { value: '604394a2a7532c33dcb326d5' } });
    expect(select.props().value).toEqual('604394a2a7532c33dcb326d5');
  });
});
