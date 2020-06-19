import React from 'react';
import { gql } from 'apollo-boost';
import { ApolloServiceConsumer } from '../services/ApolloService/ApolloServiceContext';

const withApolloService = () => (Wrapped) => (props) => (
  <ApolloServiceConsumer>
    {(ApolloService) => <Wrapped {...props} client={ApolloService} gql={gql} />}
  </ApolloServiceConsumer>
);

export default withApolloService;
