import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductImages from '../product-images';

jest.mock('connected-react-router', () => {
  jest.fn();
});
jest.mock('../product-images.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));
React.useContext = mockUseContext;

const dispatch = jest.fn();
const storage = {
  language: 0,
  images: {
    primary: {
      large: '',
      medium: '',
      small: ''
    },
    additional: []
  }
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);

describe('ProductImages page test', () => {
  it('Should render ProductImages', () => {
    const component = shallow(<ProductImages images={{
      primary: { large: '' },
      additional: [{ large: '' }]
    }} />);
    expect(component).toBeDefined();
  });
});
