import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI
});

export default client;
