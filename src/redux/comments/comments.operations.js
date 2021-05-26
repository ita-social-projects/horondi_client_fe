import { setItems, getItems, client } from '../../utils/client';

const getComments = async (id) => {
  const getCommentsQuery = `
    query($id: ID!) {
      getAllCommentsByProduct(productId: $id) {
        ... on Comment {
          _id
          text
          date
          user {
            _id
            email
            firstName
            lastName
            images {
              thumbnail
            }
          }
        }
        ... on Error {
          statusCode
          message
        }
      }
    }
  `;
  const result = await getItems(getCommentsQuery, { id });
  await client.resetStore();
  return result?.data?.getAllCommentsByProduct;
};

const changeRate = async (payload) => {
  const changeRateMutation = `mutation($product: ID!, $rate: Int!) {
    addRate(product: $product, userRate: { rate: $rate }) {
      ... on Product {
        rate
      }
    }
  }`;
  const result = await setItems(changeRateMutation, payload);

  return result?.data?.addRate;
};

const addComment = async (payload) => {
  const addCommentMutation = `
    mutation(
      $product: ID!
      $email: String!
      $firstName: String
      $show: Boolean!
      $text: String
      $images: ImageSetInput
    ) {
      addComment(
        productId: $product
        comment: {
          text: $text
          show: $show
          user: { email: $email, name: $firstName, images: $images }
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
            images {
              thumbnail
            }
          }
        }
      }
    }
  `;
  const result = await setItems(addCommentMutation, payload);
  await client.resetStore();

  return result?.data?.addComment;
};

const deleteComment = async (payload) => {
  const deleteCommentMutation = `
    mutation($comment: ID!) {
      deleteComment(id: $comment) {
        ... on Comment {
          _id
        }
      }
    }
  `;
  const result = await setItems(deleteCommentMutation, payload);
  await client.resetStore();

  return result?.data?.deleteComment;
};

const updateComment = async (payload) => {
  const updateCommentMutation = `
    mutation(
      $comment: ID!
      $product: ID!
      $email: String!
      $show: Boolean!
      $text: String
      $firstName: String
      $images: ImageSetInput
    ) {
      updateComment(
        id: $comment
        comment: {
          text: $text
          show: $show
          user: { email: $email, name: $firstName, images: $images }
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
            images {
              thumbnail
            }
          }
        }
      }
    }
  `;
  const result = await setItems(updateCommentMutation, payload);
  await client.resetStore();

  return result?.data?.updateComment;
};

export { getComments, changeRate, addComment, deleteComment, updateComment };
