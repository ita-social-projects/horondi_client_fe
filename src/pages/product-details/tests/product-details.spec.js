import React from 'react';
import { useQuery } from '@apollo/client';

import ProductDetails from '../index';

const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));

React.useContext = mockUseContext;

const mockIsInWishlist = jest.fn();
const mockAddToWishlist = jest.fn();
const mockRemoveFromWishlist = jest.fn();
const mockWishlist = {};

const useQueryData = {
  loading: false,
  error: false
};

jest.mock('../product-submit/product-submit.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../components/app/app.styles', () => ({
  useAppStyles: () => ({})
}));
jest.mock('../../../hooks/use-add-product-to-wishlist-handler', () => ({
  __esModule: true,
  default: () => [true, () => null]
}));
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({
    currency: 0,
    isLightTheme: true,
    productToSend: { options: { size: '' } }
  }),
  useDispatch: () => () => null
}));
jest.mock('@apollo/client');
jest.mock('../product-details.styles', () => ({
  useStyles: () => ({ container: '' })
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

jest.mock('../../../hooks/use-wishlist', () => ({
  useWishlist: () => ({
    isInWishlist: mockIsInWishlist,
    wishlist: mockWishlist,
    wishlistOperations: {
      addToWishlist: mockAddToWishlist,
      removeFromWishlist: mockRemoveFromWishlist
    }
  })
}));

describe('Product details test', () => {
  let wrapper;

  it('Should render product details component', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<ProductDetails match={{ params: { id: 1 } }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<ProductDetails match={{ params: { id: 1 } }} />);
  });
});
