import { gql } from '@apollo/client';

export const getPromoCodeByCode = gql`
  query ($code: String!) {
    getPromoCodeByCode(code: $code) {
      __typename
      ... on PromoCode {
        _id
        code
        discount
        categories
      }
    }
  }
`;
