import { setCart } from '../cart.actions';
import { cartReducer } from '../cart.reducer';

describe('cart reducer test', () => {
  let initialState;
  let newState;
  let cartAction;
  const cartItem = {
    id: 1,
    name: 'Garbyz'
  };

  beforeEach(() => {
    initialState = {
      list: []
    };
    cartAction = setCart(cartItem);
    newState = cartReducer(initialState, cartAction);
  });

  it('should return object', () => {
    expect(typeof newState).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(newState).toBeTruthy();
  });

  it('length of new state should be equal to 1', () => {
    expect(newState.list).toEqual(cartItem);
  });

  it('length of new state should be equal to 0', () => {
    cartAction = setCart([]);
    newState = cartReducer(initialState, cartAction);
    expect(newState.list.length).toEqual(0);
  });

  it('value by key "lightMode" of returned state should to be equal to initial state', () => {
    newState = cartReducer(initialState, { type: 'ANYTHING' });
    expect(newState.list).toEqual(initialState.list);
  });
});
