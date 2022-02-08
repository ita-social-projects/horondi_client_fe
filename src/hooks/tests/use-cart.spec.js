import { useDispatch } from 'react-redux';
import { useCart } from '../use-cart';
import { mockItem, mockPromoCode } from './use-cart.variables';

const dispatch = jest.fn();

jest.mock('react-redux');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [[mockItem], () => null],
  useEffect: (cb) => cb()
}));

useDispatch.mockImplementation(() => dispatch);

describe('use-cart tests', () => {
  it('should return cart item by id', () => {
    const { cartOperations } = useCart();

    const result = cartOperations.getCartItem(mockItem.productId);
    expect(result).toEqual(mockItem);
  });
  it('should return total price with promo code', () => {
    const { cartOperations } = useCart();

    const result = cartOperations.getTotalPricesWithPromoCode(0, mockPromoCode);
    expect(result).toBe(900);
  });
  it('should return product price with promo code', () => {
    const { cartOperations } = useCart();

    const result = cartOperations.getProductPriceWithPromoCode(mockItem.id, 0, mockPromoCode);
    expect(result).toBe(900);
  });
  it('should return product price', () => {
    const { cartOperations } = useCart();

    const result = cartOperations.getProductPrice(mockItem.id, 0);
    expect(result).toBe(1000);
  });
  it('should return total price', () => {
    const { cartOperations } = useCart();

    const result = cartOperations.getTotalPrice();
    expect(result).toBe(1000);
  });
  it('should check is item in cart', () => {
    const { isInCart } = useCart();

    const result = isInCart(mockItem.productId);
    expect(result).toBe(mockItem);
  });
});
