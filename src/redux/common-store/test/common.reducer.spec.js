import { setCartItems } from '../common.actions';
import { initialState, commonReducer } from '../common.reducer';

const newCart = [{ item: 'some item' }];

describe('common reducer test', () => {
  it('should return initial state', () => {
    expect(commonReducer()).toEqual(initialState);
  });

  it('should return updated cart', () => {
    const result = commonReducer(initialState, setCartItems(newCart));
    expect(result).toEqual({ ...initialState, cart: newCart });
  });
});
