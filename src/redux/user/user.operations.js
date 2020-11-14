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
              totalPrice {
                value
                currency
              }
              image
              bagBottom {
                name {
                  value
                  lang
                }
                value
              }
              quantity
              selectedSize
              sidePocket
              dimensions {
                volumeInLiters
                weightInKg
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

const removeProductFromUserCart = async ({ id, product, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      product,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $product: CartProductInput!) {
        removeProductFromCart(id: $id, product: $product, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.removeProductFromCart;
};

const addProductToUserCart = async ({ id, product, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      product,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $product: CartProductInput!) {
        addProductToCart(id: $id, product: $product, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.addProductToCart;
};

const changeQuantityIntoUserCart = async ({ id, product, key }) => {
  const result = await client.mutate({
    variables: {
      id,
      product,
      key
    },
    mutation: gql`
      mutation($id: ID!, $key: String!, $product: CartProductInput!) {
        changeCartProductQuantity(id: $id, product: $product, key: $key) {
          _id
        }
      }
    `
  });

  return result.data.changeCartProductQuantity;
};

export {
  getUserByToken,
  removeProductFromUserWishlist,
  addProductToUserWishlist,
  removeProductFromUserCart,
  changeQuantityIntoUserCart,
  addProductToUserCart
};
