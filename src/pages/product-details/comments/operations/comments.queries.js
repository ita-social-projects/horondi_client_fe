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
