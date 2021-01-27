import { gql } from '@apollo/client';
import { client } from '../../../utils/client';

export const getConstructorBottomById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getConstructorBottomById(id: $id) {
          ... on ConstructorBottom {
            _id
            image
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  if (result.data.getConstructorBottomById.message) throw new Error();
  return result.data.getConstructorBottomById;
};
