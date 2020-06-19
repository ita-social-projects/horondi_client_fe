import React from 'react';

const {
  Provider: ApolloServiceProvider,
  Consumer: ApolloServiceConsumer
} = React.createContext();

export { ApolloServiceConsumer, ApolloServiceProvider };
