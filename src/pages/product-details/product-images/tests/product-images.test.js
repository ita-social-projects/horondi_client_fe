import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import ProductImages from '../product-images';
import { Products, Theme, Language } from './product-images.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';

const mockUseSelector = jest.spyOn(redux, 'useSelector');
configure({ adapter: new Adapter() });

describe('Product submit tests', () => {
  let wrapper;
  const themeValue = theme('light');

  beforeEach(() => {
    mockUseSelector.mockImplementation((fn) => fn({ Products, Theme, Language }));

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductImages />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseSelector.mockClear();
  });

  it('Should render component', () => {
    expect(wrapper.exists('div')).toBe(true);
  });
});
