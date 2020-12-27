import { setWishlist } from '../wishlist.actions';
import { wishlistReducer } from '../wishlist.reducer';

describe('cart reducer test', () => {
  let initialState;
  let newState;
  let wishlistAction;
  const wishlistItem = {
    id: 1,
    name: 'Lemon'
  };

  beforeEach(() => {
    initialState = {
      list: []
    };
    wishlistAction = setWishlist(wishlistItem);
    newState = wishlistReducer(initialState, wishlistAction);
  });

  it('should return object', () => {
    expect(typeof newState).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(newState).toBeTruthy();
  });

  it('length of new state should be equal to 1', () => {
    expect(newState.list).toEqual(wishlistItem);
  });

  it('length of new state should be equal to 0', () => {
    wishlistAction = setWishlist([]);
    newState = wishlistReducer(initialState, wishlistAction);
    expect(newState.list.length).toEqual(0);
  });

  it('value by key "list" of returned state should to be equal to initial state', () => {
    newState = wishlistReducer(initialState, { type: 'ANYTHING' });
    expect(newState.list).toEqual(initialState.list);
  });
});
