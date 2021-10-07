import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import * as redux from 'react-redux';
import ProductInfo from '../product-info';
import { Products, Language, Currency } from './product-info.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';

const mockUseSelector = jest.spyOn(redux, 'useSelector');
configure({ adapter: new Adapter() });

describe('Product submit tests', () => {
  let wrapper;
  const themeValue = theme('light');

  beforeEach(() => {
    mockUseSelector.mockImplementation((fn) => fn({ Products, Language, Currency }));

    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ProductInfo price={Products.productToSend.price} />
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
