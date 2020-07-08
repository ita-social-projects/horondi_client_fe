import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI
});

const getItems = (query) =>
  client
    .query({
      query: gql`
        ${query}
      `
    })
    .then(
      (res) =>
        // const result = {
        //     data: {},
        //     error: ['Seems like our server has some problems']
        // }
        //     throw new Error(result.error[0]);
        res
    );

export default getItems;
