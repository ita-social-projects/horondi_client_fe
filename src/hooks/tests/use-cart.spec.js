import { useDispatch } from 'react-redux';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../use-cart';
import { mockItem, mockPromoCode, sizeAndPrice } from './use-cart.variables';

const dispatch = jest.fn();

jest.mock('react-redux');

useDispatch.mockImplementation(() => dispatch);

describe('use-cart tests', () => {
  it('should add item to cart', () => {
    const { result } = renderHook(useCart);
    act(() => {
      result.current.cartOperations.addToCart(mockItem);
    });

    expect(result.current.cart).toContain(mockItem);
  });
  it('should return cart item by id', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.cartOperations.getCartItem(mockItem.productId);
    });

    expect(res).toEqual(mockItem);
  });
  it('should return total price with promo code', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.cartOperations.getTotalPricesWithPromoCode(0, mockPromoCode);
    });

    expect(res).toBe(900);
  });
  it('should return product price with promo code', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.cartOperations.getProductPriceWithPromoCode(
        mockItem.id,
        0,
        mockPromoCode
      );
    });

    expect(res).toBe(900);
  });
  it('should return product price', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.cartOperations.getProductPrice(mockItem.id, 0);
    });

    expect(res).toBe(1000);
  });
  it('should return total price', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.cartOperations.getTotalPrice();
    });

    expect(res).toBe(1000);
  });
  it('should check is item in cart', () => {
    const { result } = renderHook(useCart);
    let res;
    act(() => {
      res = result.current.isInCart(mockItem.productId);
    });

    expect(res).toEqual(mockItem);
  });
  it('should change quantity', () => {
    const { result } = renderHook(useCart);

    act(() => {
      result.current.cartOperations.changeQuantity(mockItem.id, 2);
    });
    const item = result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.quantity).toEqual(2);
  });
  it('should change size', () => {
    const { result } = renderHook(useCart);

    act(() => {
      result.current.cartOperations.changeSize(mockItem.id, sizeAndPrice);
    });
    const item = result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice).toEqual(sizeAndPrice);
  });
  it('should change constructor size', () => {
    const { result } = renderHook(useCart);

    act(() => {
      result.current.cartOperations.changeSizeConstructor(mockItem.id, sizeAndPrice.size);
    });
    const item = result.current.cart.find((el) => (el.id = mockItem.id));

    expect(item.sizeAndPrice.size).toEqual(sizeAndPrice.size);
  });
});
