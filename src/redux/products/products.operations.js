import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getAllProducts = async () => {
  const result = await client.query({
    query: gql`
      query {
        getProducts {
          items {
            mainMaterial {
              material {
                _id {
                  name {
                    value
                  }
                }
              }
              color {
                _id
                simpleName {
                  value
                }
              }
            }
            sizes {
              _id
              name
            }
            basePrice {
              value
              currency
            }
            model {
              _id
              name {
                value
              }
            }
            pattern {
              _id
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
      search: state.filters.searchFilter,
      colors: state.filters.colorsFilter,
      patterns: state.filters.patternsFilter,
      price: state.filters.priceFilter,
      currency,
      skip: state.currentPage * state.countPerPage,
      limit: state.countPerPage,
      rate: state.sortByRate || undefined,
      basePrice: state.sortByPrice || undefined,
      category: state.filters.categoryFilter,
      purchasedCount: state.sortByPopularity || undefined,
      isHotItem: state.filters.isHotItemFilter,
      models: state.filters.modelsFilter
    },
    query: gql`
      query(
        $search: String
        $price: [Int]
        $colors: [String]
        $patterns: [String]
        $isHotItem: Boolean
        $skip: Int
        $limit: Int
        $rate: Int
        $basePrice: Int
        $purchasedCount: Int
        $category: [String]
        $models: [String]
        $currency: Int
      ) {
        getProducts(
          filter: {
            colors: $colors
            pattern: $patterns
            price: $price
            category: $category
            isHotItem: $isHotItem
            models: $models
            currency: $currency
          }
          skip: $skip
          limit: $limit
          search: $search
          sort: {
            rate: $rate
            basePrice: $basePrice
            purchasedCount: $purchasedCount
          }
        ) {
          items {
            _id
            purchasedCount
            availableCount
            name {
              lang
              value
            }
            basePrice {
              value
              currency
            }
            rate
            images {
              primary {
                small
                medium
                large
                thumbnail
              }
            }
            pattern {
              _id
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
            isHotItem
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
                _id
              }
              color {
                _id
              }
            }
            innerMaterial {
              material {
                _id
              }
              color {
                _id
              }
            }
            bottomMaterial {
              material {
                _id
              }
              color {
                _id
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
            pattern {
              _id
            }
            closure {
              _id
            }
            basePrice {
              value
              currency
            }
            sizes {
              name
              heightInCm
              widthInCm
              depthInCm
              volumeInLiters
              available
              weightInKg
              additionalPrice {
                value
                currency
              }
            }
            rate
            comments {
              items {
                _id
                text
                date
                user {
                  email
                  name
                  images {
                    thumbnail
                  }
                }
              }
            }
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
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return result.data.getProductById;
};

export { getProductById, getAllProducts, getFilteredProducts };
