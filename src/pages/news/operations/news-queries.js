import { gql } from '@apollo/client';

export const getAllNews = gql`
  query {
    getAllNews {
      items {
        _id
        title {
          value
        }
        slug
        author {
          name {
            value
          }
          image
        }
        text {
          value
        }
        date
        image
      }
    }
  }
`;

export const getNewsById = gql`
  query ($id: ID!) {
    getNewsById(id: $id) {
      ... on News {
        __typename
        _id
        title {
          value
        }
        text {
          value
        }
        image
        author {
          name {
            value
          }
          image
        }
        date
      }
      ... on Error {
        message
        statusCode
      }
    }
  }
`;
