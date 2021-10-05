import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import * as matchers from 'redux-saga-test-plan/matchers';
import {
  handleCartLoad,
  handleAddCartItem,
  handleRemoveCartItem,
  handleSetCartItemSize,
  handleSetUserCartItemSize
} from '../cart.sagas';
import { SET_CART } from '../cart.types';
import * as localStorageService from '../../../services/local-storage.service';
import { addItemToCart, removeItemFromCart, setCartLoading } from '../cart.actions';
import { cartKey } from '../../../configs';
import { changeUserCartItemSize } from '../cart.operations';

describe('Cart saga', () => {
  let products;
  let product;
  const fakeCart = [
    {
      product: { _id: 'some id' },
      price: [{ currency: 'UAH', value: 2050 }],
      options: { size: { _id: 'some id' } },
      quantity: 1,
      allSizes: [{ size: { _id: 'some id' }, price: [{ currency: 'UAH', value: 2050 }] }]
    }
  ];

  beforeEach(() => {
    product = { _id: 3, name: 'Orange', selectedSize: 'L' };
    products = [
      { _id: 1, name: 'Pumpkin', selectedSize: 'M' },
      { _id: 2, name: 'Cherry', selectedSize: 'S' }
    ];
    localStorageService.setToLocalStorage(cartKey, products);
  });

  it.skip('fetching cart items from local storage and set to redux store', () =>
    expectSaga(handleCartLoad)
      .provide([[matchers.call.fn(localStorageService.getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: products
      })
      .run());

  it.skip('fetching cart items from local storage and add new one', () => {
    const productToCart = addItemToCart(product);

    return expectSaga(handleAddCartItem, productToCart)
      .provide([[matchers.call.fn(localStorageService.getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: [...products, product]
      })
      .run();
  });

  it.skip('if product already in cart nothing changes', () => {
    const productToCart = addItemToCart(products[0]);

    return expectSaga(handleAddCartItem, productToCart)
      .provide([[matchers.call.fn(localStorageService.getFromLocalStorage), products]])
      .put({
        type: SET_CART,
        payload: products
      })
      .run();
  });

  it.skip('should to remove product from cart by id', () => {
    const productToRemove = removeItemFromCart(products[0]);

    return expectSaga(handleRemoveCartItem, productToRemove)
      .provide([[matchers.call.fn(localStorageService.getFromLocalStorage), products]])
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
    localStorageService.setToLocalStorage(cartKey, fakeItems);
    const productToRemove = removeItemFromCart(fakeItems[0]);

    return expectSaga(handleRemoveCartItem, productToRemove)
      .provide([[matchers.call.fn(localStorageService.getFromLocalStorage), fakeItems]])
      .put({
        type: SET_CART,
        payload: [fakeItems[1]]
      })
      .run();
  });

  it('should change cart item size', () => {
    jest.spyOn(localStorageService, 'getFromLocalStorage').mockImplementation(() => fakeCart);
    jest.spyOn(localStorageService, 'setToLocalStorage').mockImplementation(() => null);

    return expectSaga(handleSetCartItemSize, {
      payload: {
        item: fakeCart[0],
        value: { size: { _id: 'some id' }, price: [{ currency: 'UAH', value: 2050 }], quantity: 1 }
      }
    })
      .put({
        type: SET_CART,
        payload: [fakeCart[0]]
      })
      .run();
  });

  it('should change user cart item size', () => expectSaga(handleSetUserCartItemSize, {
    payload: {
      item: fakeCart[0],
      value: { size: { _id: 'some id' }, price: [{ currency: 'UAH', value: 2050 }], quantity: 1 },
      user: { _id: 'some id' }
    }
  })
    .put(setCartLoading(true))
    .provide([
      [
        call(changeUserCartItemSize, 'some id', fakeCart[0], {
          size: { _id: 'some id' },
          price: [{ currency: 'UAH', value: 2050 }],
          quantity: 1
        }),
        { cart: { items: [fakeCart[0]] } }
      ]
    ])
    .put({
      type: SET_CART,
      payload: [fakeCart[0]]
    })
    .put(setCartLoading(false))
    .run());
});
