import { gql } from '@apollo/client';
import { client } from '../../../utils/client';

export const getConstructorPatternById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getPatternById(id: $id) {
          ... on Pattern {
            _id
            constructorImg
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

  if (result.data.getPatternById.message) {
    throw new Error(result.data.getPatternById.message);
  }

  return result.data.getPatternById;
};
