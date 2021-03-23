import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getUserByToken = async () => {
  const result = await client.query({
    query: gql`
      query {
        getUserByToken {
          ... on User {
            orders
            _id
            email
            firstName
            lastName
            phoneNumber
            images {
              thumbnail
            }
            address {
              country
              city
              street
              buildingNumber
              appartment
              zipcode
              region
            }
            confirmed
            wishlist {
              _id
              name {
                lang
                value
              }
              basePrice {
                currency
                value
              }
              images {
                primary {
                  small
                }
              }
            }
            cart {
              items {
                product {
                  _id
                }
                quantity
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
    `,
    fetchPolicy: 'no-cache'
  });

  if (result.data.getUserByToken.statusCode) {
    throw new Error(result.data.getUserByToken.message);
  }

  return result.data.getUserByToken;
};

const removeProductFromUserWishlist = async ({ id, productId, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      productId,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $productId: ID!) {
        removeProductFromWishlist(id: $id, productId: $productId, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.removeProductFromWishlist;
};

const getPurchasedProducts = async (id) => {
  const result = await client.mutate({
    variables: {
      id
    },
    mutation: gql`
      query($id: ID!) {
        getPurchasedProducts(id: $id) {
          _id
        }
      }
    `
  });

  return result.data.getPurchasedProducts;
};

const addProductToUserWishlist = async ({ id, productId, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      productId,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $productId: ID!) {
        addProductToWishlist(id: $id, productId: $productId, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.addProductToWishlist;
};

const regenerateAccessToken = async (refreshToken) => {
  const result = await client.mutate({
    variables: {
      refreshToken
    },
    mutation: gql`
      mutation($refreshToken: String!) {
        regenerateAccessToken(refreshToken: $refreshToken) {
          ... on Token {
            __typename
            token
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `
  });

  const data = result.data.regenerateAccessToken;

  if (data.message || data.statusCode) {
    throw new Error(data.message);
  }

  return data.token;
};

export {
  getUserByToken,
  removeProductFromUserWishlist,
  addProductToUserWishlist,
  regenerateAccessToken,
  getPurchasedProducts
};
