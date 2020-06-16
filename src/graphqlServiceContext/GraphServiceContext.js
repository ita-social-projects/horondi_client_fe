import React from 'react';

const {
  Provider: GraphqlServiceProvider,
  Consumer: GraphqlServiceConsumer
} = React.createContext();

export { GraphqlServiceConsumer, GraphqlServiceProvider };
