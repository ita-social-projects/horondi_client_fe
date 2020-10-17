import getItems from '../../utils/client';

const getProduct = (id) =>
  getItems(
    `query($id: ID!) {
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
  }`,
    {
      id
    }
  );

export {
  getProduct,
};
