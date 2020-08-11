import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'unfetch';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';

const introspectionResult = require('../fragmentTypes.json');

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});
export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  fetch,
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
