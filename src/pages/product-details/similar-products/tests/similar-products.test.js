import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import * as reactRedux from 'react-redux';

import SimilarProducts from '../index';
import { mockedSelector } from './similar-products.variables';

Enzyme.configure({ adapter: new Adapter() });

describe('Similar products test', () => {
  let wrapper;

  it('Should render similar products component', () => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(mockedSelector);

    wrapper = mount(<SimilarProducts />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    wrapper = mount(<SimilarProducts cartList={[]} />);
  });
});
