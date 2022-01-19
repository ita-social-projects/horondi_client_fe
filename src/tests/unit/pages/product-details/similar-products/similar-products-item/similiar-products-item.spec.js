import React from 'react';
import { render, screen, waitForElement, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SimilarProductsItem from '../../../../../../pages/product-details/similar-products/similar-products-item';
import { item } from './similar-products-item.variable';

import routes from '../../../../../../configs/routes';
import { getImage } from '../../../../../../utils/imageLoad';

const { pathToProducts } = routes;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [{ setImage: [{}] }, () => null]
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light',
      carouselItem: {
        shadow: {
          boxShadow: null
        }
      }
    }
  })
}));
const mockTranslation = item.product.name[0].value;
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => mockTranslation
  })
}));

describe('Similar products test', () => {
  beforeEach(() => {
    const props = {
      id: item.id,
      imageUrl: item.product.images.primary.thumbnail,
      rate: item.rate,
      price: item.price[0].value,
      translationsKey: '61af5cbf97e964ccc50e2c31'
    };
    render(
      <BrowserRouter>
        <SimilarProductsItem {...props} />
      </BrowserRouter>
    );
  });

  it('should contain only one link to a product', () => {
    expect(screen.getAllByRole('link').length).toBe(1);
  });
  it('link should be taken from product.id', () => {
    expect(screen.getByRole('link').getAttribute('href')).toBe(`${pathToProducts}/${item.id}`);
  });

  it('should render rating component', () => {
    expect(screen.getByLabelText(/stars/i)).toBeInTheDocument();
  });
});

describe('UseEffect', () => {
  it('waiting user effect to ', async () => {
    const props = {
      id: item.id,
      imageUrl: item.product.images.primary.thumbnail,
      rate: item.rate,
      price: item.price[0].value,
      translationsKey: '61af5cbf97e964ccc50e2c31'
    };
    await act(async () => {
      render(
        <BrowserRouter>
          <SimilarProductsItem {...props} />
        </BrowserRouter>
      );
    });
    waitForElement(() => {
      expect(getImage).toHaveBeenCalled();
    });
  });
});
