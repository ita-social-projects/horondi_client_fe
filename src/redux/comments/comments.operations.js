import { gql } from '@apollo/client';
import getItems, { setItems, client } from '../../utils/client';

const getComments = id =>
  getItems(
    `query($id: ID!) {
        getAllCommentsByProduct(productId: $id) {
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
    }`,
    {
      id
    }
  );

const changeRate = payload =>
  setItems(
    `mutation($product: ID!, $rate: Int!) {
        addRate(product: $product, userRate: { rate: $rate }) {
          ... on Product {
            rate
          }
        }
    }`,
    payload
  );

const addComment = async payload => {
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

const deleteComment = async payload => {
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

const updateComment = async payload => {
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

export { getComments, changeRate, addComment, deleteComment, updateComment };
