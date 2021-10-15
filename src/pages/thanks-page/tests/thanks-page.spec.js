import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@material-ui/core';
import ThanksPage from '../thanks-page';
import OrderData from '../order-data/order-data';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() })
}));
jest.mock('../thanks-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../services/local-storage.service');

const dispatch = jest.fn();
const state = {
  isLightTheme: true,
  language: 1,
  loading: false,
  currency: 0,
  order: null,
  paidOrderLoading: false,
  user: {}
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('ThanksPage component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<ThanksPage />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render ThanksPage', () => {
    expect(wrapper).toBeDefined();
  });

  it('ThanksPage should contain OrderData', () => {
    expect(wrapper.exists(OrderData)).toBe(true);
  });

  it('Cart table should renders', () => {
    expect(wrapper.find(OrderData).dive().find(Table)).toHaveLength(1);
  });

  it('Cart should contain title', () => {
    expect(wrapper.exists('h2')).toBe(true);
  });
});
