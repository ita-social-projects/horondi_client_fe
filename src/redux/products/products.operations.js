import { gql } from '@apollo/client';
import { client } from '../../utils/client';

const getAllProducts = async () => {
  const result = await client.query({
    query: gql`
      query {
        getProducts {
          items {
            colors {
              name {
                value
              }
              simpleName {
                value
              }
            }
            basePrice {
              value
              currency
            }
            model {
              value
            }
            pattern {
              value
            }
            category {
              _id
              name {
                value
              }
              isMain
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
            model {
              value
            }
            rate
            images {
              primary {
                large
                medium
                large
                small
              }
            }
            colors {
              name {
                lang
                value
              }
              simpleName {
                lang
                value
              }
            }
            pattern {
              lang
              value
            }
            category {
              _id
              name {
                value
              }
              isMain
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
              lang
              value
            }
            innerMaterial {
              lang
              value
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
            colors {
              code
              name {
                lang
                value
              }
              images {
                thumbnail
                large
              }
              available
            }
            pattern {
              lang
              value
            }
            closure {
              lang
              value
            }
            basePrice {
              value
              currency
            }
            options {
              size {
                name
                heightInCm
                widthInCm
                depthInCm
                volumeInLiters
                available
                additionalPrice {
                  value
                  currency
                }
              }
              bottomMaterial {
                name {
                  lang
                  value
                }
                additionalPrice {
                  value
                  currency
                }
              }
              additions {
                name {
                  lang
                  value
                }
                available
                additionalPrice {
                  value
                  currency
                }
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
            options {
              size {
                _id
                name
                volumeInLiters
                widthInCm
                weightInKg
              }
              bottomMaterial {
                _id
                name {
                  lang
                  value
                }
                available
                additionalPrice {
                  value
                  currency
                }
              }
              additions {
                name {
                  value
                  lang
                }
                available
                additionalPrice {
                  value
                  currency
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
