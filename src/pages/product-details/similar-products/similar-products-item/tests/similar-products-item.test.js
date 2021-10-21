import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import * as reactRedux from 'react-redux';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';

import { Rating } from '@material-ui/lab';
import SimilarProductsItem from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Similar products test', () => {
  let wrapper;

  beforeAll(() => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((selector) =>
        selector({ Language: { language: 0 }, Theme: { lightMode: false } })
      );

    wrapper = mount(
      <BrowserRouter>
        <SimilarProductsItem
          imageUrl='/img'
          id='some id'
          name='some name'
          rate={100}
          price={110}
          currencySign={faDollarSign}
        />
      </BrowserRouter>
    );
  });

  it('Should render similar products component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rating component', () => {
    expect(wrapper.exists(Rating)).toBe(true);
  });
});
