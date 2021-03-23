import { gql } from '@apollo/client';
import { client } from '../../utils/client';

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
    value
    }
}
`;

const megreCartFromLCwithUserCart = async (cartFromLc, id) => {
  const getCartInput = (cartFromLc) =>
    cartFromLc.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      options: {
        size: item.options.size._id
      }
    }));
  const items = getCartInput(cartFromLc);

  const res = await client.mutate({
    variables: {
      items,
      id
    },
    mutation: gql`
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
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.mergeCartFromLS.cart.items;
};

const getCartByUserId = async (userId) => {
  const result = await client.query({
    variables: {
      id: userId
    },
    query: gql`
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
    `,
    fetchPolicy: 'no-cache'
  });
  return result.data.getCartByUserId;
};

const cleanCart = async (userId) => {
  const result = await client.mutate({
    variables: {
      id: userId
    },
    mutation: gql`
      mutation($id: ID!) {
        cleanCart(id: $id) {
          ... on User {
            _id
            firstName
            cart {
                ${cartReqBody}
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return result.data.cleanCart;
};

const addProductToCart = async (userId, cartItem) => {
  const result = await client.mutate({
    variables: {
      productId: cartItem.product._id,
      sizeId: cartItem.options.size._id,
      id: userId
    },
    mutation: gql`
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
      `,
    fetchPolicy: 'no-cache'
  });
  return result.data.addProductToCart;
};

const DeleteProductFromCart = async (userId, cartItems) => {
  const result = await client.mutate({
    variables: {
      items: cartItems,
      id: userId
    },
    mutation: gql`
        mutation($items: [RemoveItemsFromCartInput!], $id:ID!) {
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
      `,
    fetchPolicy: 'no-cache'
  });
  return result.data.removeProductItemsFromCart;
};

const updateCartItemQuantity = async (payload) => {
  const { item, value, userId } = payload;

  const result = await client.mutate({
    variables: {
      productId: item.product._id,
      quantity: value,
      sizeId: item.options.size._id,
      id: userId
    },
    mutation: gql`
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
      `,
    fetchPolicy: 'no-cache'
  });
  return result.data.updateCartItemQuantity;
};

export {
  megreCartFromLCwithUserCart,
  getCartByUserId,
  cleanCart,
  addProductToCart,
  DeleteProductFromCart,
  updateCartItemQuantity
};
