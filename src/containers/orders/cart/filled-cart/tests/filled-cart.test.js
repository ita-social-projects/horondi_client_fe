import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { Loader } from '../../../../../components/loader/loader';

import FilledCart from '../filled-cart';

configure({ adapter: new Adapter() });

let wrapper;

const items = [{ price: [{ currency: 'ua', value: 100 }] }];

function spyOnSelector(lightMode, loading) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) =>
    cb({
      Language: { language: 0 },
      Currency: { currency: 0 },
      Cart: { list: [], loading, quantityLoading: loading, totalPrice: 100 },
      User: { userData: {} },
      Theme: { lightMode }
    })
  );
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

    expect(wrapper.exists(Loader)).toBeTruthy();
  });

  it('should cover other branches', () => {
    spyOnSelector(false, false);

    wrapper = shallow(<FilledCart items={items} />);
  });
});
