import { getCart, setCart } from '../cart.actions';
import { SET_CART, GET_CART } from '../cart.types';

describe('setCart action test', () => {
  let type;
  let cartAction;
  const cartItem = {
    id: 1,
    name: 'Garbyz'
  };

  beforeEach(() => {
    type = SET_CART;
    cartAction = setCart(cartItem);
  });

  it('should return object', () => {
    expect(typeof cartAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(cartAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "SET_CART"', () => {
    expect(cartAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be "Garbyz"', () => {
    expect(cartAction.payload.name).toEqual('Garbyz');
  });

  it('value by key "payload.name" of returned object should to be "Horondi"', () => {
    const expectation = { name: 'Horondi' };
    cartAction = setCart(expectation);
    expect(cartAction.payload.name).toEqual('Horondi');
  });
});

describe('get items from cart', () => {
  let type;

  beforeEach(() => {
    type = GET_CART;
  });

  it('should return object', () => {
    expect(typeof getCart()).toStrictEqual('object');
  });

  it('should return object with one key/value "type: GET_CART"', () => {
    expect(getCart()).toStrictEqual({ type: GET_CART });
  });

  it('should to be truthy', () => {
    expect(getCart()).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_CART"', () => {
    expect(getCart().type).toEqual(type);
  });
});
