import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const megreCartFromLCwithUserCart = async (items, id) => {
  console.log(items);
  console.log(id);
  const result = await client.mutate({
    variables: {
      items,
      id
    },
    mutation: gql`
      mutation($items: [CartFromLSInput!], $id: ID!) {
        mergeCartFromLS(items: $items, id: $id) {
          ... on User {
            _id
            firstName
            cart {
              items {
                product {
                  _id
                  name {
                    lang
                    value
                  }
                  pattern {
                    _id
                  }
                }
                quantity
                options {
                  size {
                    _id
                  }
                }
                price {
                  value
                }
              }
            }
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `
  });

  return result.data.mergeCartFromLS;
};

export { megreCartFromLCwithUserCart };
