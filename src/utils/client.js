import ApolloClient, { gql } from 'apollo-boost';

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: REACT_APP_API_URL
});

const getItems = (query) =>
  client
    .query({
      query: gql`
        ${query}
      `
    })
    .then((response) => 
      // if(response.error.length > 0) {
      //     throw new Error(response.error[0]);
      // }
      response
    );

export default getItems;
