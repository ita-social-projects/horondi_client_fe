import { SET_CART } from '../common.types';
import { setCartItems } from '../common.actions';

const payload = [{ item: 'some item' }];

describe('common.action test', () => {
  it('should set payload', () => {
    const result = setCartItems(payload);
    expect(result).toEqual({ type: SET_CART, payload });
  });
});
