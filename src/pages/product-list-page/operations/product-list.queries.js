import { gql } from '@apollo/client';

export const getFilteredProductsQuery = gql`
  query (
    $search: String
    $price: [Float]
    $patterns: [String]
    $isHotItem: Boolean
    $skip: Int
    $limit: Int
    $rate: Int
    $basePrice: Int
    $purchasedCount: Int
    $category: [String]
    $models: [String]
  ) {
    getProducts(
      filter: {
        pattern: $patterns
        price: $price
        category: $category
        isHotItem: $isHotItem
        models: $models
      }
      limit: $limit
      skip: $skip
      search: $search
      sort: { rate: $rate, basePrice: $basePrice, purchasedCount: $purchasedCount }
    ) {
      __typename
      ... on PaginatedProducts {
        items {
          _id
          category {
            _id
            name {
              value
            }
          }
          model {
            _id
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
              _id
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
              small
            }
          }
          pattern {
            _id
            name {
              lang
              value
            }
          }
          basePrice
          availableCount
          available
          rate
          translationsKey
          sizes {
            size {
              available
            }
            price
          }
        }
        count
      }
      ... on Error {
        statusCode
        message
      }
    }
  }
`;
export const getAllFiltersQuery = gql`
  query {
    getProductsFilters {
      categories {
        _id
        name {
          value
        }
      }
      models {
        _id
        name {
          value
        }
      }
      patterns {
        _id
        name {
          value
        }
      }
      maxPrice
      minPrice
    }
  }
`;
