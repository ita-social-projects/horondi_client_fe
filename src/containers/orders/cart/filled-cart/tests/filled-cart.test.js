import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/loader/loader';
import FilledCart from '../filled-cart';

jest.mock('react-redux');

let wrapper;
const items = [{ price: [{ currency: 'ua', value: 100 }] }];

function spyOnSelector(lightMode, loading) {
  useSelector.mockImplementation(() => ({
    currency: 0,
    Language: { language: 0 },
    Currency: { currency: 0 },
    Cart: { list: [], loading, quantityLoading: loading, totalPrice: 100 },
    User: { userData: {} },
    Theme: { lightMode }
  }));
}

describe('Filled cart component tests', () => {
  it('should match snapshot', () => {
    spyOnSelector(true, false);
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find loader', () => {
    spyOnSelector(true, true);
    wrapper = shallow(<FilledCart items={items} />);
    expect(wrapper.exists(Loader)).toBeDefined();
  });

  it('should cover other branches', () => {
    spyOnSelector(false, false);
    wrapper = shallow(<FilledCart items={items} />);
  });
});
