import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getAllProducts = async () => {
  const result = await client.query({
    query: gql`
      query {
        getProducts {
          items {
            _id
            name {
              value
            }
            mainMaterial {
              color {
                _id
                name {
                  value
                }
                simpleName {
                  value
                }
              }
            }
            bottomMaterial {
              material {
                _id
                name {
                  value
                }
              }
            }
            images {
              primary {
                small
              }
            }
            basePrice {
              value
              currency
            }
            model {
              _id
              category {
                _id
                code
                name {
                  value
                }
              }
              name {
                value
              }
            }
            pattern {
              name {
                value
              }
            }
            category {
              _id
              name {
                value
              }
            }
          }
        }
      }
    `
  });
  return result.data.getProducts;
};

const getFilteredProducts = async ({ state, currency }) => {
  const result = await client.query({
    variables: {
      patterns: state.filters.patternsFilter,
      colors: state.filters.colorsFilter,
      category: state.filters.categoryFilter,
      isHotItem: state.filters.isHotItemFilter,
      models: state.filters.modelsFilter,
      currency,
      limit: state.countPerPage,
      skip: state.currentPage * state.countPerPage,
      search: state.filters.searchFilter,
      purchasedCount: state.sortByPopularity,
      basePrice: state.sortByPrice,
      rate: state.sortByRate
    },
    query: gql`
      query(
        $patterns: [String]
        $colors: [String]
        $category: [String]
        $isHotItem: Boolean
        $models: [String]
        $currency: Int
        $limit: Int
        $skip: Int
        $search: String
        $purchasedCount: Int
        $basePrice: Int
        $rate: Int
      ) {
        getProducts(
          filter: {
            pattern: $patterns
            colors: $colors
            category: $category
            isHotItem: $isHotItem
            models: $models
            currency: $currency
          }
          limit: $limit
          skip: $skip
          search: $search
          sort: {
            purchasedCount: $purchasedCount
            basePrice: $basePrice
            rate: $rate
          }
        ) {
          items {
            _id
            category {
              _id
              name {
                value
              }
            }
            model {
              name {
                value
              }
            }
            name {
              lang
              value
            }
            mainMaterial {
              color {
                name {
                  lang
                  value
                }
                simpleName {
                  lang
                  value
                }
              }
            }
            images {
              primary {
                large
                medium
                large
                small
              }
            }
            pattern {
              name {
                lang
                value
              }
            }
            basePrice {
              value
              currency
            }
            availableCount
            isHotItem
            purchasedCount
            rate
          }
          count
        }
      }
    `
  });
  return result.data.getProducts;
};

const getProductById = async (id) => {
  const result = await client.query({
    variables: {
      id
    },
    query: gql`
      query($id: ID!) {
        getProductById(id: $id) {
          ... on Product {
            _id
            category {
              _id
              name {
                lang
                value
              }
            }
            name {
              lang
              value
            }
            description {
              lang
              value
            }
            mainMaterial {
              material {
                name {
                  lang
                  value
                }
              }
              color {
                _id
                name {
                  lang
                  value
                }
              }
            }
            innerMaterial {
              material {
                name {
                  lang
                  value
                }
              }
            }
            bottomMaterial {
              material {
                _id
                name {
                  value
                }
              }
            }
            strapLengthInCm
            images {
              primary {
                medium
                large
              }
              additional {
                small
                large
              }
            }
            closure {
              name {
                lang
                value
              }
            }
            pattern {
              name {
                lang
                value
              }
            }
            basePrice {
              value
              currency
            }
            sizes {
              _id
              name
              weightInKg
              volumeInLiters
            }
            rate
            availableCount
            images {
              primary {
                thumbnail
                small
                large
                medium
              }
              additional {
                large
                medium
              }
            }
            comments {
              items {
                _id
                text
                date
                user {
                  email
                  firstName
                  images {
                    thumbnail
                  }
                }
              }
            }
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return result.data.getProductById;
};

export { getProductById, getAllProducts, getFilteredProducts };
