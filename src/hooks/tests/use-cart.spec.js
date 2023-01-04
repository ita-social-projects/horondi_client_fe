import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../use-cart';
import {
  mockItem,
  mockPromoCode,
  mockCertificate,
  sizeAndPrice,
  constructorData
} from './use-cart.variables';
import CartContextProvider from '../../context/cart-context';

const wrapper = ({ children }) => <CartContextProvider>{children}</CartContextProvider>;
const mockGetPriceWithCurrency = jest.fn((price) => price);

jest.mock('../use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency
  })
}));

describe('use-cart tests', () => {
  let wrap;
  let res;
  beforeEach(() => {
    wrap = renderHook(() => useCart(), { wrapper });
  });
  it('should add item to cart', () => {
    act(() => {
      wrap.result.current.cartOperations.addToCart(mockItem);
    });

    expect(wrap.result.current.cartItems).toContain(mockItem);
  });
  it('should return cart item by id', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getCartItem(mockItem.productId);
    });

    expect(res).toEqual(mockItem);
  });
  it('should add promocode', () => {
    act(() => {
      res = wrap.result.current.cartOperations.addPromocode(mockPromoCode);
    });

    expect(wrap.result.current.promoCode).toEqual(mockPromoCode);
  });
  it('should add certificate', () => {
    act(() => {
      res = wrap.result.current.cartOperations.addCertificate(mockCertificate);
    });

    expect(wrap.result.current.certificate).toEqual(mockCertificate);
  });
  it('should return total price with promo code', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getTotalPricesWithPromoCode(mockPromoCode);
    });

    expect(res).toBe(90);
  });

  it('should return total price with certificate', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getTotalPriceWithCertificate(mockCertificate);
    });

    expect(res).toBe(83);
  });

  it('should return product price with promo code', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getProductPriceWithPromoCode(
        mockItem.id,
        mockPromoCode
      );
    });

    expect(res).toBe(90);
  });

  it('should return total save price with certificate', () => {
    act(() => {
      const price =
        wrap.result.current.cartOperations.getTotalPrice() -
        mockCertificate.getCertificateByParams.value;
      res = wrap.result.current.cartOperations.getTotalPrice() - price;
    });

    expect(res).toBe(17);
  });

  it('should return product price', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getProductPrice(mockItem.id, 0);
    });

    expect(res).toBe(100);
  });
  it('should return total price', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getTotalPrice();
    });

    expect(res).toBe(100);
  });
  it('should check is item in cart', () => {
    act(() => {
      res = wrap.result.current.isInCart(mockItem.productId);
    });

    expect(res).toEqual(mockItem);
  });
  it('should change quantity', () => {
    act(() => {
      wrap.result.current.cartOperations.changeQuantity(mockItem.id, 2);
    });
    const item = wrap.result.current.cartItems.find((el) => (el.id = mockItem.id));

    expect(item.quantity).toEqual(2);
  });
  it('should change size', () => {
    act(() => {
      wrap.result.current.cartOperations.changeSize(mockItem.id, sizeAndPrice);
    });
    const item = wrap.result.current.cartItems.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice).toEqual(sizeAndPrice);
  });
  it('should change constructor size', () => {
    act(() => {
      wrap.result.current.cartOperations.changeSizeConstructor(
        mockItem.id,
        sizeAndPrice.size,
        constructorData
      );
    });
    const item = wrap.result.current.cartItems.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice.size).toEqual(sizeAndPrice.size);
  });
  it('should remove item from cart', () => {
    act(() => {
      wrap.result.current.cartOperations.removeFromCart(mockItem);
    });

    expect(wrap.result.current.cartItems).toHaveLength(0);
  });
  it('should clean cart', () => {
    act(() => {
      wrap.result.current.cartOperations.clearCart();
    });

    expect(wrap.result.current.cartItems).toHaveLength(0);
    expect(wrap.result.current.certificate).toBe(null);
    expect(wrap.result.current.certificate).toBe(null);
  });
});
