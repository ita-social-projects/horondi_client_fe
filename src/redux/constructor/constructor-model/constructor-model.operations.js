import { gql } from '@apollo/client';
import { client } from '../../../utils/client';

export const getModelForConstructor = async () => {
  const result = await client.query({
    query: gql`
      query {
        getModelsForConstructor {
          ... on Model {
            _id
            name {
              value
            }
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return result.data.getModelsForConstructor;
};

export const getModelById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getModelById(id: $id) {
          ... on Model {
            _id
            name {
              value
            }
            constructorBasic {
              _id
              name {
                value
              }
            }
            constructorPattern {
              _id
              name {
                value
              }
            }
            constructorFrontPocket {
              _id
              name {
                value
              }
              image
            }
            constructorBottom {
              _id
              name {
                value
              }
            }
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

  if (result.data.getModelById.message) throw new Error();

  return result.data.getModelById;
};
