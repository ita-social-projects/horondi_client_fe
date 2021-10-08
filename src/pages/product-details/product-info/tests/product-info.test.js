import React from 'react';
<<<<<<< HEAD
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
=======
import { useSelector } from 'react-redux';
>>>>>>> 3c3006cd... 973/product-submit/test
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

<<<<<<< HEAD
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
=======
describe('Product info', () => {
  it('Should render', () => {
    const component = shallow(<ProductInfo />);
    expect(component).toBeDefined();
>>>>>>> 3c3006cd... 973/product-submit/test
  });
});
