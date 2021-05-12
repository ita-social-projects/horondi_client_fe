import { getItems } from '../../utils/client';

const getAllModels = async () => {
  const getAllModelsQuery = `
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
  `;
  const result = await getItems(getAllModelsQuery, { skip: 0, limit: 0 });

  return result?.data?.getAllModels;
};

const getModelsByCategory = async (payload) => {
  const getModelsByCategoryQuery = `
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
          small
        }
        description {
          value
        }
      }
    }
  `;
  const result = await getItems(getModelsByCategoryQuery, { category: payload });

  return result?.data?.getModelsByCategory;
};

export { getModelsByCategory, getAllModels };
