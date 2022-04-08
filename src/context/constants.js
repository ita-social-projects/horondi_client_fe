import { gql } from '@apollo/client';

export const SNACKBAR_TYPES = {
  success: 'success'
};

export const getAllCurrencies = gql`
  query {
    getAllCurrencies {
      _id
      convertOptions {
        UAH {
          name
          exchangeRate
        }
        USD {
          name
          exchangeRate
        }
      }
    }
  }
`;
