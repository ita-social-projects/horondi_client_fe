import { getItems } from '../../utils/client';

const getAllFilters = async () => {
  const getAllFiltersQuery = `
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
        closures {
          _id
          name {
            value
          }
        }
        mainMaterial {
          _id
          name {
            value
          }
        }
        mainMaterialColor {
          _id
          name {
            value
          }
        }
        innerMaterialColor {
          _id
          name {
            value
          }
        }
        bottomMaterial {
          _id
          name {
            value
          }
        }
        maxPrice {
          value
        }
        minPrice {
          value
        }
      }
    }
  `;
  const result = await getItems(getAllFiltersQuery);

  return result?.data?.getProductsFilters;
};

const getFilteredProducts = async ({ state, currency }) => {
  const getFilteredProductsQuery = `
    query(
      $search: String
      $price: [Float]
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
            basePrice {
              value
              currency
            }
            isHotItem
            purchasedCount
            availableCount
            rate
            sizes {
              size {
                available
              }
              price {
                value
                currency
              }
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
  const result = await getItems(getFilteredProductsQuery, {
    search: state.filters.searchFilter,
    colors: state.filters.colorsFilter,
    patterns: state.filters.patternsFilter,
    price: state.filters.priceFilter,
    currency,
    skip: (state.currentPage - 1) * state.countPerPage,
    limit: state.countPerPage,
    rate: state.sortByRate || undefined,
    basePrice: state.sortByPrice || undefined,
    category: state.filters.categoryFilter,
    purchasedCount: state.sortByPopularity || undefined,
    isHotItem: state.filters.isHotItemFilter,
    models: state.filters.modelsFilter
  });

  return result?.data?.getProducts;
};

const getProductById = async (id) => {
  const getProductByIdQuery = `
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
              colorHex
              simpleName {
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
                lang
                value
              }
              additionalPrice {
                currency
                value
              }
            }
            color {
              _id
              name {
                lang
                value
              }
              colorHex
              simpleName {
                lang
                value
              }
            }
          }
          strapLengthInCm
          images {
            primary {
              large
              medium
              small
              thumbnail
            }
            additional {
              large
              medium
              small
              thumbnail
            }
          }
          closure {
            name {
              lang
              value
            }
          }
          pattern {
            _id
            name {
              lang
              value
            }
          }
          basePrice {
            currency
            value
          }
          sizes {
            size {
              _id
              name
              heightInCm
              widthInCm
              depthInCm
              volumeInLiters
              weightInKg
              available
            }
            price {
              value
              currency
            }
          }
          availableCount
          rate          
        }
        ... on Error {
          statusCode
          message
        }
      }
    }
  `;
  const result = await getItems(getProductByIdQuery, { id });

  return result?.data?.getProductById;
};

export { getProductById, getAllFilters, getFilteredProducts };