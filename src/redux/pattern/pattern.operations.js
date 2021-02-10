import { gql } from '@apollo/client';
import { client } from '../../utils/client';

export const getAllPatterns = async (skip, limit) => {
  const result = await client.query({
    variables: {
      skip,
      limit
    },
    query: gql`
      query($skip: Int, $limit: Int) {
        getAllPatterns(skip: $skip, limit: $limit) {
          items {
            _id
            name {
              lang
              value
            }
            images {
              large
              medium
              small
              thumbnail
            }
            material {
              _id
              name {
                lang
                value
              }
            }
            available
          }
          count
        }
      }
    `
  });
  client.resetStore();

  return result.data.getAllPatterns;
};
