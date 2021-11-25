import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ThanksPage from '../thanks-page';
import ThanksCard from '../thanks-card/thanks-card';

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
  order: {
    _id: '619eb12f3c53565320f384c6',
    orderNumber: '1637789999938',
    recipient: {
      firstName: 'John',
      lastName: 'Dou',
      phoneNumber: '380934850648'
    },
    delivery: {
      byCourier: false,
      sentBy: 'SELFPICKUP',
      courierOffice: '',
      city: '',
      street: '',
      house: ''
    }
  },
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

  it('ThanksPage should contain ThanksCard', () => {
    expect(wrapper.exists(ThanksCard)).toBe(true);
  });

  it('ThanksCard should contain self delivery address', () => {
    expect(wrapper.find(ThanksCard).dive().text()).toContain('thanksPage.thanksCard.selfDelivery');
  });
});
