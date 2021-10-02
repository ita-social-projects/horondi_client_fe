import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import * as reactRedux from 'react-redux';
import * as utils from '../../../../utils/productDetails';
import SimilarProducts from '../index';
import { mockedDataForLightTheme, mockedDataForDarkTheme } from './similar-products.variables';

Enzyme.configure({ adapter: new Adapter() });

describe('Similar products test', () => {
  let wrapper;

  it('Should render similar products component', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((selector) => selector(mockedDataForLightTheme));

    wrapper = mount(<SimilarProducts />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((selector) => selector(mockedDataForDarkTheme));
    jest.spyOn(utils, 'similarProductForCart').mockImplementation(() => [
      {
        images: {
          primary: {
            medium: ''
          }
        },
        sizes: [
          {
            size: {
              available: true
            },
            price: [
              {
                currency: 'ua',
                value: 10
              }
            ]
          }
        ]
      }
    ]);

    wrapper = mount(<SimilarProducts cartList={[{}]} />);
  });
});
