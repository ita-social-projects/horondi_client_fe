import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getAllModels = async () => {
  const result = await client.query({
    variables: {
      skip: 0,
      limit: 0
    },
    query: gql`
      query($skip: Int, $limit: Int) {
        getAllModels(skip: $skip, limit: $limit) {
          items {
            _id
            category {
              name {
                value
              }
            }
            name {
              value
            }
            images {
              small
            }
            show
          }
          count
        }
      }
    `
  });

  return result.data.getAllModels;
};

const getModelsByCategory = async (payload) => {
  const result = await client.query({
    variables: {
      category: payload
    },
    query: gql`
      query($category: ID!) {
        getModelsByCategory(id: $category) {
          _id
          category {
            name {
              value
            }
          }
          name {
            value
          }
          images {
            large
          }
          description {
            value
          }
        }
      }
    `
  });

  return result.data.getModelsByCategory;
};

export { getModelsByCategory, getAllModels };
