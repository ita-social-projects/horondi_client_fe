import ApolloClient, { gql, IntrospectionFragmentMatcher } from 'apollo-boost';

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;
const client = new ApolloClient({
  uri: REACT_APP_API_URL
});

const getItems = (query) =>
  client.query({
    query: gql`
      ${query}
    `
  });

export default getItems;
