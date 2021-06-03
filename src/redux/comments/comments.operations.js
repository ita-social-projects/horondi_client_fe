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
          replyComments {
            _id
            createdAt
            replyText
            showReplyComment
            answerer{
              firstName
              email
            }
          }
          user {
            _id
            email
            firstName
          }
          userName
          email
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
      $user: ID
      $rate: Int
    ) {
      addComment(
        comment: {
          text: $text
          show: $show
          userName:$firstName
          email: $email
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
          user{
            firstName
            email
          }
          userName
          email
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
      $answerer: ID
    ) {
      replyForComment(
        id: $id
        commentId: $commentId
        replyCommentData: {
          answerer: $answerer
          replyText: $replyText
          refToReplyComment: $commentId
        }
      ) {
        ... on Comment {
          _id
          replyComments {
            _id
            replyText
            showReplyComment
            createdAt
            answerer{
              firstName
              email
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
