import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from '../../../components/app/app-theme/app.theme';
import ImagesConstructor from '../images-constructor';
import mockStore from './mockStore';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
let spyOnUseSelector;
let spyOnUseDispatch;
let mockDispatch;

let wrapper;

jest.mock('horondi_merge_images', () => ({ DEFAULT_PRICE_VALUE: '1400' }));

describe('ImagesConstructor component tests', () => {
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

    mockDispatch = jest.fn();

    spyOnUseSelector.mockImplementation(() => mockStore);
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(
      <ThemeProvider theme={themeValue}>
        <ImagesConstructor />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyOnUseSelector.mockClear();
    wrapper = null;
  });

  it('Should render ImagesConstructor', () => {
    expect(wrapper).toBeDefined();
  });
});
