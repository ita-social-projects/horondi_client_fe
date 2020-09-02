import { getWishlist, setWishlist } from '../wishlist.actions';
import { SET_WISHLIST, GET_WISHLIST } from '../wishlist.types';

describe('setWishlist action test', () => {
  let type;
  let wishlistAction;
  const wishlistItem = {
    id: 1,
    name: 'Lemon'
  };

  beforeEach(() => {
    type = SET_WISHLIST;
    wishlistAction = setWishlist(wishlistItem);
  });

  it('should return object', () => {
    expect(typeof wishlistAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(wishlistAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "SET_WISHLIST"', () => {
    expect(wishlistAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be "Lemon"', () => {
    expect(wishlistAction.payload.name).toEqual('Lemon');
  });

  it('value by key "payload.name" of returned object should to be "Horondi"', () => {
    const expectation = { name: 'Horondi' };
    wishlistAction = setWishlist(expectation);
    expect(wishlistAction.payload.name).toEqual('Horondi');
  });
});

describe('get items from cart', () => {
  let type;

  beforeEach(() => {
    type = GET_WISHLIST;
  });

  it('should return object', () => {
    expect(typeof getWishlist()).toStrictEqual('object');
  });

  it('should return object with one key/value "type: GET_WISHLIST"', () => {
    expect(getWishlist()).toStrictEqual({ type: GET_WISHLIST });
  });

  it('should to be truthy', () => {
    expect(getWishlist()).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_WISHLIST"', () => {
    expect(getWishlist().type).toEqual(type);
  });
});
