import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {
  handleCartLoad,
  handleAddCartItem,
  handleRemoveCartItem
} from '../cart.sagas';
import { SET_CART } from '../cart.types';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../../services/local-storage.service';
import { addItemToCart, removeItemFromCart } from '../cart.actions';

describe('Cart saga', () => {
  let products;
  let product;

  beforeEach(() => {
    product = { _id: 3, name: 'Orange', selectedSize: 'L' };
    products = [
      { _id: 1, name: 'Pumpkin', selectedSize: 'M' },
      { _id: 2, name: 'Cherry', selectedSize: 'S' }
    ];
    setToLocalStorage('cart', products);
  });

  it.skip('fetching cart items from local storage and set to redux store', () =>
    expectSaga(handleCartLoad)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: products
      })
      .run());

  it.skip('fetching cart items from local storage and add new one', () => {
    const productToCart = addItemToCart(product);

    return expectSaga(handleAddCartItem, productToCart)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: [...products, product]
      })
      .run();
  });

  it.skip('if product already in cart nothing changes', () => {
    const productToCart = addItemToCart(products[0]);

    return expectSaga(handleAddCartItem, productToCart)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: products
      })
      .run();
  });

  it.skip('should to remove product from cart by id', () => {
    const productToRemove = removeItemFromCart(products[0]);

    return expectSaga(handleRemoveCartItem, productToRemove)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: [products[1]]
      })
      .run();
  });

  it.skip('also checks the size of products before removal', () => {
    const fakeItems = [
      { _id: 1, name: 'Pumpkin', selectedSize: 'M' },
      { _id: 1, name: 'Pumpkin', selectedSize: 'L' }
    ];
    setToLocalStorage('cart', fakeItems);
    const productToRemove = removeItemFromCart(fakeItems[0]);

    return expectSaga(handleRemoveCartItem, productToRemove)
      .provide([[matchers.call.fn(getFromLocalStorage), fakeItems]])
      .put({
        type: SET_CART,
        payload: [fakeItems[1]]
      })
      .run();
  });
});
