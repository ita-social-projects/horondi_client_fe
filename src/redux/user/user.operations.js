import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getUserByToken = async () => {
  const result = await client.query({
    query: gql`
      query {
        getUserByToken {
          ... on User {
            purchasedProducts
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

const removeProductFromUserCartOrWishlist = async ({ id, productId, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      productId,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $productId: ID!) {
        removeProductFromCartOrWishlist(
          id: $id
          productId: $productId
          key: $key
        ) {
          _id
        }
      }
    `
  });

  return result.data.removeProductFromCartOrWishlist;
};

const addProductToUserCartOrWishlist = async ({ id, productId, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      productId,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $productId: ID!) {
        addProductToCartOrWishlist(id: $id, productId: $productId, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.addProductToCartOrWishlist;
};

export {
  getUserByToken,
  removeProductFromUserCartOrWishlist,
  addProductToUserCartOrWishlist
};
