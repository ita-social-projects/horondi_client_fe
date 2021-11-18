import { ApolloClient, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'unfetch';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client/public';

import { USER_TOKENS, FETCH_POLICY } from '../configs';
import { AUTH_ERRORS } from '../configs/const';
import { getFromLocalStorage } from '../services/local-storage.service';
import refreshAuthToken from './regenerateAuthTokenPair';

const introspectionResult = require('../fragmentTypes');

const { ACCESS_TOKEN } = USER_TOKENS;
const { ACCESS_TOKEN_IS_NOT_VALID } = AUTH_ERRORS;
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

const authLink = setContext((_, { headers }) => {
  const token = getFromLocalStorage(ACCESS_TOKEN);
  return {
    headers: {
      ...headers,
      token: token || ''
    }
  };
});

export const client = new ApolloClient({
  fetch,
  link: authLink.concat(createUploadLink({ uri: REACT_APP_API_URL })),
  cache: new InMemoryCache({
    addTypename: false,
    fragmentMatcher
  })
});

export const getItems = async (query, variables = {}) => {
  try {
    const token = getFromLocalStorage(ACCESS_TOKEN);

    const queryResult = await client.query({
      query: gql`
        ${query}
      `,
      variables,
      context: {
        headers: {
          token
        }
      },
      fetchPolicy: FETCH_POLICY
    });

    if (queryResult.data && Object.values(queryResult.data)[0]?.message) {
      const message = Object.values(queryResult.data)[0]?.message;
      if (message === ACCESS_TOKEN_IS_NOT_VALID) {
        const tokenResult = await refreshAuthToken();
        if (tokenResult) {
          return await getItems(query, variables);
        }
      }
      throw new Error(message);
    }
    return queryResult;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const setItems = async (query, variables) => {
  try {
    const token = getFromLocalStorage(ACCESS_TOKEN);
    const mutationResult = await client.mutate({
      mutation: gql`
        ${query}
      `,
      variables,
      context: {
        headers: {
          token
        }
      },
      fetchPolicy: FETCH_POLICY
    });

    if (mutationResult.data && Object.values(mutationResult.data)[0]?.message) {
      const message = Object.values(mutationResult.data)[0]?.message;
      if (message === ACCESS_TOKEN_IS_NOT_VALID) {
        const tokenResult = await refreshAuthToken();
        if (tokenResult) {
          return await setItems(query, variables);
        }
      }
      throw new Error(message);
    }
    return mutationResult;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const setChatMail = (query, variables) =>
  client.mutate({
    mutation: gql`
      ${query}
    `,
    variables
  });
