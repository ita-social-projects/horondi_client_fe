import { call, select } from 'redux-saga/effects';

import { setItems } from '../../utils/client';
import { WISHLIST_KEY } from '../../configs';

function* handleUserWishlistOperation(handler, productId) {
  const userData = yield select(({ User }) => User.userData);
  if (userData) {
    yield call(handler, {
      id: userData._id,
      key: WISHLIST_KEY,
      productId
    });
  }
}

const addProductToUserWishlist = async ({ id, productId, key }) => {
  const addProductToUserWishlistMutation = `
      mutation($id: ID!, $key: String!, $productId: ID!) {
        addProductToWishlist(id: $id, productId: $productId, key: $key) {
          _id
        }
      }
    `;
  const result = await setItems(addProductToUserWishlistMutation, { id, key, productId });

  return result?.data?.addProductToWishlist;
};

const removeProductFromUserWishlist = async ({ id, productId, key }) => {
  const removeProductFromUserWishlistMutation = `
      mutation($id: ID!, $key: String!, $productId: ID!) {
        removeProductFromWishlist(id: $id, productId: $productId, key: $key) {
          _id
        }
      }
    `;
  const result = await setItems(removeProductFromUserWishlistMutation, { id, key, productId });

  return result?.data?.removeProductFromWishlist;
};

export { handleUserWishlistOperation, addProductToUserWishlist, removeProductFromUserWishlist };
