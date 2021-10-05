import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';

import OrderTable from '../order-table';

configure({ adapter: new Adapter() });

let wrapper;

function spyOnSelector(language, lightMode) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) =>
    cb({
      Language: { language },
      Theme: { lightMode }
    })
  );
}

const props = {
  currency: 0,
  calcPrice: 100,
  cartLoading: false,
  cartQuantityLoading: false,
  items: [{ product: { product_id: 'some id' }, price: 10 }],
  user: {}
};
describe('Order table component tests', () => {
  beforeAll(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => (cb) => cb());
  });

  it('should match snapshot', () => {
    spyOnSelector(0, false);

    wrapper = shallow(<OrderTable {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    spyOnSelector(0, true);
    jest.spyOn(React, 'useState').mockImplementation(() => [true, () => null]);

    wrapper = shallow(<OrderTable {...props} />);
  });
});
