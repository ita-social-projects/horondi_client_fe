import { gql } from '@apollo/client';

export const getUserOrdersCountQuery = gql`
  query ($id: ID) {
    getCountUserOrders(id: $id) {
      countOrder
    }
  }
`;
