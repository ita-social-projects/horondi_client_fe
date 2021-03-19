import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const megreCartFromLCwithUserCart = async (cartFromLc, userId) => {
  const getCartInput = (cartFromLc) =>
    cartFromLc.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      options: {
        size: item.options.size._id
      }
    }));
  const cartForMerge = getCartInput(cartFromLc);
  console.log(cartForMerge);

  const result = await client.mutate({
    variables: {
      items: cartForMerge,
      id: userId
    },
    mutation: gql`
      mutation($items: [CartFromLSInput!], $id: ID!) {
        mergeCartFromLS(items: $items, id: $id) {
          ... on User {
            _id
            firstName
            cart {
              items {
                product {
                  _id
                  name {
                    lang
                    value
                  }
                  pattern {
                    _id
                  }
                }
                quantity
                options {
                  size {
                    _id
                  }
                }
                price {
                  value
                }
              }
            }
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `
  });
  console.log(result);
  return result.data.mergeCartFromLS;
};

const getCartByUserId = async (userId) => {
  const result = await client.query({
    variables: {
      id: userId
    },
    query: gql`
      query($id: ID!) {
        getCartByUserId(id: $id) {
          ... on User {
            cart {
              items {
                product {
                  _id
                  name {
                    lang
                    value
                  }
                }
                options {
                  size {
                    _id
                  }
                }
              }
              totalPrice {
                value
              }
            }
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `
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
              items {
                product {
                  _id
                  name {
                    lang
                    value
                  }
                  pattern {
                    _id
                  }
                }
                quantity
                options {
                  size {
                    _id
                  }
                }
                price {
                  value
                }
              }
            }
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `
  });
  console.log(result);
  return result.data.cleanCart;
};

export { megreCartFromLCwithUserCart, getCartByUserId, cleanCart };
