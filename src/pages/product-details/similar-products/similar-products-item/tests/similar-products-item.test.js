import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import { Rating } from '@material-ui/lab';
import SimilarProductsItem from '../index';

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('Similar products test', () => {
  let wrapper;

  beforeAll(() => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((selector) => selector({ Language: { language: 0 } }));

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
