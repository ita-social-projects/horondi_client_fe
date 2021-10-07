import React from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductInfo from '../product-info';

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../product-info.styles', () => ({
  useStyles: () => ({})
}));

useSelector.mockImplementation(() => ({
  language: 0,
  currency: 0,
  name: [
    {
      lang: 'ua'
    }
  ],
  rate: 0,
  description: [
    {
      value: 'test'
    }
  ],
  mainMaterial: {
    color: {
      _id: '123'
    },
    material: {
      name: {
        0: {
          value: 'test'
        }
      }
    }
  },
  innerMaterial: {
    material: {
      name: [{ lang: 'ua' }]
    }
  },
  bottomMaterial: {
    material: {
      name: {
        0: {
          value: 'test'
        }
      }
    }
  },
  strapLengthInCm: '100',
  currentPrice: {
    price: [
      {
        value: 70
      }
    ]
  },
  currentWeight: {
    dimensions: {
      weightInKg: 1
    }
  },
  currentVolume: {
    dimensions: {
      volumeInLiters: 22
    }
  }
}));

describe('Product info', () => {
  it('Should render', () => {
    const component = shallow(<ProductInfo />);
    expect(component).toBeDefined();
=======
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
>>>>>>> 77516eaa... 973/refact/prodact-details/product-images/test
  });
});
