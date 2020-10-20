import setItems from '../../utils/client';

const addProductToWishlist = (userId, productId) =>
  setItems(
    `
		mutation($id: ID!, $productId: ID!) {
			addProductToWishlist(productId: $productId, id: $id) 
		}
	`,
    { id: userId, productId }
  );

const removeProductFromWishlist = (userId, productId) =>
  setItems(
    `
		mutation($id: ID!, $productId: ID!) {
			removeProductFromWishlist(productId: $productId, id: $id) 
		}
	`,
    { id: userId, productId }
  );

export { addProductToWishlist, removeProductFromWishlist };
