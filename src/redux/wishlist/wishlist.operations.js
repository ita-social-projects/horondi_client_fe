import setItems from '../../utils/client';

const addProductToWishlist = async (userId, productId) => {
  const res = await setItems(
    `
		mutation($id: ID!, $productId: ID!) {
			addProductToWishlist(productId: $productId, id: $id) {
				_id
				name {
					lang
					value
				}
				basePrice {
					currency
					value
				}
			} 
		}
	`,
    { id: userId, productId }
  );
  return res.data.addProductToWishlist;
};

const removeProductFromWishlist = async (userId, productId) => {
  const res = await setItems(
    `
		mutation($id: ID!, $productId: ID!) {
			removeProductFromWishlist(productId: $productId, id: $id) {
				_id
			}
		}
	`,
    { id: userId, productId }
  );
  return res.data.removeProductFromWishlist;
};

export { addProductToWishlist, removeProductFromWishlist };
