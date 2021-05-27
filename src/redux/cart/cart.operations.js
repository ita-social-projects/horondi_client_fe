import { getItems, setItems } from '../../utils/client';

const cartReqBody = `
items {
    product {
    _id
    name {
        lang
        value
    }
    category{
      _id
    }
    bottomMaterial{
        material{
        name{
            lang
            value
        }
        }
    }
    mainMaterial{
      color{
        _id
        name{
          lang
          value
        }
      }
    }
    pattern{
      _id
    }
    images{
        primary{
        small
        thumbnail
        }
    }
    
    }
    quantity
    options {
    size {
        _id
        name
    }
    }
    price {
      currency
      value
    }
}
`;

const mergeCartFromLSWithUserCart = async (cartFromLc, id) => {
  const getCartInput = (cart) =>
    cart.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      options: {
        size: item.options.size._id
      }
    }));
  const items = getCartInput(cartFromLc);

  const mergeCartFromLSMutation = `
    mutation($items: [CartFromLSInput!], $id: ID!) {
      mergeCartFromLS(items: $items, id: $id) {
      ... on User {
        _id
        firstName
        cart {
            ${cartReqBody}
          totalPrice{
              currency
              value
          }
        }
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
  `;
  const result = await setItems(mergeCartFromLSMutation, { items, id });

  return result?.data?.mergeCartFromLS;
};

const getCartByUserId = async (userId) => {
  const getCartByUserIdQuery = `
    query($id:ID!){
      getCartByUserId(id: $id) {
        ... on User {
          cart {
            ${cartReqBody}
            totalPrice {
              value
            }
          }
        }
      }
    }
  `;
  const result = await getItems(getCartByUserIdQuery, { id: userId });

  if (result?.data?.getCartByUserId?.message) {
    throw new Error(result.data.getCartByUserId.message);
  }

  return result?.data?.getCartByUserId;
};

const cleanCart = async (userId) => {
  const cleanCartMutation = `
    mutation($id: ID!) {
      cleanCart(id: $id) {
        ... on User {
          _id
        }
        ... on Error {
          message
          statusCode
        }
      }
    }
  `;
  const result = await setItems(cleanCartMutation, { id: userId });

  return result?.data?.cleanCart;
};

const addProductToCart = async (userId, cartItem) => {
  const addProductToCartMutation = `
    mutation($productId: ID!, $sizeId: ID!, $id:ID!) {
      addProductToCart(productId: $productId, sizeId: $sizeId,id:$id) {
        ... on User {
          _id
          firstName
          cart {
            ${cartReqBody}
            totalPrice{
              currency
              value
            }
          }
        }
        ... on Error {
          message
          statusCode
        }
      }
    }
  `;
  const result = await setItems(addProductToCartMutation, {
    productId: cartItem.product._id,
    sizeId: cartItem.options.size._id,
    id: userId
  });

  return result?.data?.addProductToCart;
};

const deleteProductFromCart = async (userId, cartItems) => {
  const deleteProductFromCartMutation = `
    mutation($items: RemoveItemsFromCartInput!, $id:ID!) {
      removeProductItemsFromCart(items: $items,id:$id) {
        ... on User {
          _id
          firstName
          cart {
            ${cartReqBody}
          totalPrice{
            currency
            value
          }
          }
        }
        ... on Error {
          message
          statusCode
        }
      }
    }
  `;
  const result = await setItems(deleteProductFromCartMutation, {
    items: cartItems,
    id: userId
  });

  return result?.data?.removeProductItemsFromCart;
};

const updateCartItemQuantity = async (payload) => {
  const { item, value, userId } = payload;
  const updateCartItemQuantityMutation = `
    mutation($productId: ID!,$quantity:Int!, $sizeId: ID!, $id:ID!) {
      updateCartItemQuantity(productId: $productId,quantity:$quantity, sizeId: $sizeId,id:$id) {
        ... on User {
          _id
          firstName
          cart {
            ${cartReqBody}
            totalPrice{
              currency
              value
            }
          }
        }
      ... on Error {
        message
        statusCode
      }
      }
    }
  `;
  const result = await setItems(updateCartItemQuantityMutation, {
    productId: item.product._id,
    quantity: value,
    sizeId: item.options.size._id,
    id: userId
  });

  return result?.data?.updateCartItemQuantity;
};

export {
  mergeCartFromLSWithUserCart,
  getCartByUserId,
  cleanCart,
  addProductToCart,
  deleteProductFromCart,
  updateCartItemQuantity
};
