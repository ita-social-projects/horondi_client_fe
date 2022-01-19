import { SET_CART } from '../common.types';
import { setCart } from '../common.actions';

const payload = [{ item: 'some item' }];

describe('common.action test', () => {
  it('should set payload', () => {
    const result = setCart(payload);
    expect(result).toEqual({ type: SET_CART, payload });
  });
});
