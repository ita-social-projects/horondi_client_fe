import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI
});

const getItems = (query) =>
  client.query({
    query: gql`
      ${query}
    `
  });

export default getItems;
