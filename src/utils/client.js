import { ApolloClient, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'unfetch';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { getFromLocalStorage } from '../services/local-storage.service';

const introspectionResult = require('src/../../fragmentTypes.json');

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

const httpLink = createHttpLink({
  uri: REACT_APP_API_URL
});

const authLink = setContext((_, { headers }) => {
  const token = getFromLocalStorage('accessToken');
  return {
    headers: {
      ...headers,
      token
    }
  };
});

export const client = new ApolloClient({
  fetch,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: true,
    fragmentMatcher
  })
});

const getItems = (query, variables = {}) =>
  client.query({
    query: gql`
      ${query}
    `,
    fetchPolicy: 'no-cache',
    variables
  });

export const setItems = (query, variables) =>
  client.mutate({
    mutation: gql`
      ${query}
    `,
    variables
  });

export default getItems;
