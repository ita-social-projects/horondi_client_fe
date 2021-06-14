import { setItems, getItems, client } from '../../utils/client';

const getComments = async (id) => {
  const getCommentsQuery = `
    query($id: ID!) {
      getAllCommentsByProduct(productId: $id) {
        ... on Comment {
          _id
          text
          date
          show
          rate
          isSelled
          replyComments {
            _id
            createdAt
            replyText
            isSelled
            showReplyComment
            answerer{
              _id
              firstName
              email
              role
            }
          }
          user {
            _id
            email
            firstName
            role
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
      $show: Boolean!
      $text: String
      $user: ID
      $rate: Int
    ) {
      addComment(
        id: $user
        comment: {
          text: $text
          show: $show
          user: $user
          product: $product
          rate: $rate
        }
      ) {
        ... on Comment {
          _id
          text
          date
          rate
          show
          user{
            _id
            firstName
            email
            role
          }
          isSelled
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
    mutation($comment: ID!,$id:ID!) {
      deleteComment(id:$id,commentID: $comment) {
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

const addReplyForComment = async (payload) => {
  const addReplyMutation = `
    mutation(
      $id: ID
      $commentId: ID!
      $replyText: String!
      $productId: ID
      $answerer: ID
    ) {
      replyForComment(
        id: $id
        commentId: $commentId
        replyCommentData: {
          answerer: $answerer
          replyText: $replyText
          refToReplyComment: $commentId
          productId: $productId
        }
      ) {
        ... on Comment {
          _id
          replyComments {
            _id
            replyText
            showReplyComment
            createdAt
            isSelled
            answerer{
              _id
              firstName
              email
              role
            }
          }
        }
      }
    }
  `;
  const result = await setItems(addReplyMutation, payload);
  await client.resetStore();

  return result?.data?.replyForComment;
};

const deleteReplyComment = async (payload) => {
  const deleteReplyForCommentMutation = `
    mutation($replyCommentId: ID!,$id:ID!) {
      deleteReplyForComment(id:$id,replyCommentId: $replyCommentId) {
        ... on Comment {
          _id
        }
      }
    }
  `;
  const result = await setItems(deleteReplyForCommentMutation, payload);
  await client.resetStore();

  return result?.data?.deleteReplyForComment;
};

export {
  getComments,
  changeRate,
  addComment,
  deleteComment,
  addReplyForComment,
  deleteReplyComment
};
