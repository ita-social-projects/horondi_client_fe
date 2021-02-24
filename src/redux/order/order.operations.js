import { client } from "../../utils/client";
import { gql } from "@apollo/client";

export const addOrder = async order => {

  const result = await client.mutate({
    variables: {
      order
    },
    mutation: gql`
    mutation($order: OrderInput!) {
     addOrder(order: $order) {
      ... on Order {
        _id
        
      }
      ... on Error {
        statusCode
        message
      }
    }
    }
    `,
    fetchPolicy: 'no-cache'
  });
  return result.data.addOrder;
};
