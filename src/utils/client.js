import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'unfetch';

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

// console.log('Window', window.env.REACT_APP_API_URL);
// console.log('Process', process.env.REACT_APP_API_URL);

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  fetch
});

const getItems = (query) =>
  client.query({
    query: gql`
      ${query}
    `
  });

export const setItems = (query, variables) =>
  client.mutate({
    mutation: gql`
      ${query}
    `,
    variables
  });

export default getItems;
