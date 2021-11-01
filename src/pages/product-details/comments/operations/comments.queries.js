import { gql } from '@apollo/client';

export const getCommentsQuery = gql`
  query ($filter: ProductCommentFilterInput, $pagination: Pagination) {
    getCommentsByProduct(filter: $filter, pagination: $pagination) {
      ... on PaginatedComments {
        __typename
        items {
          _id
          text
          date
          show
          rate
          verifiedPurchase
          replyCommentsCount
          user {
            _id
            email
            firstName
            role
          }
        }
        count
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const addCommentMutation = gql`
  mutation ($product: ID!, $show: Boolean!, $text: String, $user: ID, $rate: Int) {
    addComment(
      id: $user
      comment: { text: $text, show: $show, user: $user, product: $product, rate: $rate }
    ) {
      ... on Comment {
        _id
        text
        date
        rate
        show
        user {
          _id
          firstName
          email
          role
        }
        verifiedPurchase
      }
    }
  }
`;

export const getReplyCommentsQuery = gql`
  query ($filter: ReplyCommentFilterInput, $pagination: Pagination) {
    getReplyCommentsByComment(filter: $filter, pagination: $pagination) {
      ... on PaginatedComments {
        __typename
        items {
          _id
          replyComments {
            _id
            replyText
            showReplyComment
            createdAt
            verifiedPurchase
            answerer {
              _id
              firstName
              email
              role
            }
          }
        }
        count
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;

export const addReplyMutation = gql`
  mutation ($id: ID, $commentId: ID!, $replyText: String!, $productId: ID, $answerer: ID) {
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
        __typename
        _id
        replyComments {
          _id
          replyText
          showReplyComment
          createdAt
          verifiedPurchase
          answerer {
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

export const deleteCommentMutation = gql`
  mutation ($id: ID!) {
    deleteComment(id: $id) {
      ... on Comment {
        __typename
        _id
      }
    }
  }
`;
