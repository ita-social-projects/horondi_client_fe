import ApolloClient, { gql } from 'apollo-boost';
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

const token = getFromLocalStorage('accessToken');

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  fetch,
  cache: new InMemoryCache({
    addTypename: false,
    fragmentMatcher
  }),
  headers: {
    token
  }
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
