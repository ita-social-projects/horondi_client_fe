import { gql } from 'apollo-boost';
import getItems, { setItems, client } from '../../utils/client';

const getProduct = (payload) =>
  getItems(
    `query($id: ID!) {
      getProductById(id: $id) {
        ... on Product {
          _id
        category {
          _id
          name {
            lang
            value
          }
        }
        name {
          lang
          value
        }
        description {
          lang
          value
        }
        mainMaterial {
          lang
          value
        }
        innerMaterial {
          lang
          value
        }
        strapLengthInCm
        images {
          primary {
            medium
            large
          }
          additional {
            small
            large
          }
        }
        colors {
          code
          name {
            lang
            value
          }
          images {
            thumbnail
            large
          }
          available
        }
        pattern {
          lang
          value
        }
        closure {
          lang
          value
        }
        basePrice {
          value
          currency
        }
        options {
          size {
            name
            heightInCm
            widthInCm
            depthInCm
            volumeInLiters
            available
            additionalPrice {
              value
              currency
            }
          }
          bottomMaterial {
            name {
              lang
              value
            }
            additionalPrice {
              value
              currency
            }
          }
          additions {
            name {
              lang
              value
            }
            available
            additionalPrice {
              value
              currency
            }
          }
        }
        rate
        comments {
          _id
          text
          date
          user {
            name
          }
        }
        options {
          size {
            _id
            name
            volumeInLiters
            widthInCm
            weightInKg
          }
          bottomMaterial {
            _id
            name {
              lang
              value
            }
            available
            additionalPrice {
              value
              currency
            }
          }
          additions {
            name {
              value
              lang
            }
            available
            additionalPrice {
              value
              currency
            }
          }
          availableCount
        }
        images {
          primary {
            thumbnail
            small
            large
            medium
          }
          additional {
            large
            medium
          }
        }
      }
    }
  }`,
    {
      id: payload
    }
  );

const getComments = (id) =>
  getItems(
    `query {
        getAllCommentsByProduct(productId: "${id}") {
          ... on Comment {
            _id
            text
            date
            user {
              email
              name
            }
          }
        }
    }`
  );

const changeRate = (payload) =>
  setItems(
    `mutation($product: ID!, $user: ID!, $rate: Int!) {
        ${payload.method}(product: $product, userRate: {user: $user,rate: $rate}) {
          rate
          userRates {
            user {
              _id
            }
          }
        }
    }`,
    payload
  );

const addComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation(
        $product: ID!
        $email: String!
        $firstName: String
        $show: Boolean!
        $text: String
      ) {
        addComment(
          productId: $product
          comment: {
            text: $text
            show: $show
            user: { email: $email, name: $firstName }
            product: $product
          }
        ) {
          ... on Comment {
            _id
            text
            date
            user {
              name
              email
            }
          }
        }
      }
    `,
    variables: payload
  });
  await client.resetStore();
  return result;
};

const deleteComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation($comment: ID!) {
        deleteComment(id: $comment) {
          ... on Comment {
            _id
            text
            date
          }
        }
      }
    `,
    variables: payload
  });
  await client.resetStore();
  return result;
};

const updateComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation(
        $comment: ID!
        $product: ID!
        $email: String!
        $show: Boolean!
        $text: String
        $firstName: String
      ) {
        updateComment(
          id: $comment
          comment: {
            text: $text
            show: $show
            user: { email: $email, name: $firstName }
            product: $product
          }
        ) {
          ... on Comment {
            _id
            text
            date
            user {
              name
              email
            }
          }
        }
      }
    `,
    variables: payload
  });
  await client.resetStore();
  return result;
};

export {
  getProduct,
  getComments,
  changeRate,
  addComment,
  deleteComment,
  updateComment
};
