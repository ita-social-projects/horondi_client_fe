import React from 'react';
import { gql } from 'apollo-boost';
import { ApolloServiceConsumer } from '../services/ApolloService/ApolloServiceContext';

const withApolloService = () => (Wrapped) => (props) => (
  <ApolloServiceConsumer>
    {(client) => <Wrapped {...props} client={client} gql={gql} />}
  </ApolloServiceConsumer>
);

export default withApolloService;
