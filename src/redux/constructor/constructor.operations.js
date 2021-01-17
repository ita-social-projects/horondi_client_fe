import { gql } from '@apollo/client';
import { client } from '../../utils/client';

export const getConstructorBasicById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getConstructorBasicById(id: $id) {
          ... on ConstructorBasic {
            _id
            image
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

  if (result.data.getConstructorBasicById.message) {
    throw new Error();
    //   `${result.data.getConstructorBasicById.statusCode} ${
    //     constructorTranslations[data.getConstructorBasicById.message]
    //   }`
  }
  return result.data.getConstructorBasicById;
};

export const getConstructorPatternById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getPatternById(id: $id) {
          ... on Pattern {
            _id
            constructorImg
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

  // if (result.data.getPatternById.message) {
    // throw new Error();
    //   `${result.data.getPatternById.statusCode} ${
    //     constructorTranslations[data.getPatternById.message]
    //   }`
  // }
  return result.data.getPatternById;
};

export const getConstructorBottomById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getConstructorBottomById(id: $id) {
          ... on ConstructorBottom {
            _id
            image
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

  // if (result.data.getConstructorBottomById.message) {
    // throw new Error();
    //   `${result.data.getConstructorBottomById.statusCode} ${
    //     constructorTranslations[data.getConstructorBottomById.message]
    //   }`
  // }
  return result.data.getConstructorBottomById;
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
              lang
              value
            }
            category {
              _id
              name {
                value
                lang
              }
            }
            images {
              large
              medium
              small
              thumbnail
            }
            priority
            show
            availableForConstructor
            description {
              value
              lang
            }
            constructorBasic {
              _id
              name {
                value
              }
              material {
                _id
                name {
                  value
                }
              }
              color {
                _id
              }
              image
            }
            constructorPattern {
              _id
              name {
                value
                lang
              }
              material
              constructorImg
              images {
                thumbnail
              }
              available
            }
            constructorFrontPocket {
              name {
                value
              }
              image
            }
            constructorBottom {
              name {
                value
              }
              image
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

  // if (result.data.getModelById.message) {
  //   throw new Error();
  //   `${result.data.getModelById.statusCode} ${
  //     constructorTranslations[data.getModelById.message]
  //   }`
  // }
  return result.data.getModelById;
};
