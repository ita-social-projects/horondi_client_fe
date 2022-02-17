import { useDispatch } from 'react-redux';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../use-cart';
import { mockItem, mockPromoCode, sizeAndPrice } from './use-cart.variables';

const dispatch = jest.fn();

jest.mock('react-redux');

useDispatch.mockImplementation(() => dispatch);

describe.skip('use-cart tests', () => {
  let wrap;
  let res;
  beforeEach(() => {
    wrap = renderHook(useCart);
  });
  it('should add item to cart', () => {
    act(() => {
      wrap.result.current.cartOperations.addToCart(mockItem);
    });

    expect(wrap.result.current.cart).toContain(mockItem);
  });
  it('should return cart item by id', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getCartItem(mockItem.productId);
    });

    expect(res).toEqual(mockItem);
  });
  it('should return total price with promo code', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getTotalPricesWithPromoCode(0, mockPromoCode);
    });

    expect(res).toBe(900);
  });
  it('should return product price with promo code', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getProductPriceWithPromoCode(
        mockItem.id,
        0,
        mockPromoCode
      );
    });

    expect(res).toBe(900);
  });
  it('should return product price', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getProductPrice(mockItem.id, 0);
    });

    expect(res).toBe(1000);
  });
  it('should return total price', () => {
    act(() => {
      res = wrap.result.current.cartOperations.getTotalPrice();
    });

    expect(res).toBe(1000);
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
    const item = wrap.result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.quantity).toEqual(2);
  });
  it('should change size', () => {
    act(() => {
      wrap.result.current.cartOperations.changeSize(mockItem.id, sizeAndPrice);
    });
    const item = wrap.result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice).toEqual(sizeAndPrice);
  });
  it('should change constructor size', () => {
    act(() => {
      wrap.result.current.cartOperations.changeSizeConstructor(mockItem.id, sizeAndPrice.size);
    });
    const item = wrap.result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice.size).toEqual(sizeAndPrice.size);
  });
  it('should remove item from cart', () => {
    act(() => {
      wrap.result.current.cartOperations.removeFromCart(mockItem);
    });

    expect(wrap.result.current.cart).toHaveLength(0);
  });
});
