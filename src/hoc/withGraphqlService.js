import React from 'react';
import { GraphqlServiceConsumer } from '../graphqlServiceContext';

const withGraphqlService = () => (Wrapped) => (props) => (
  <GraphqlServiceConsumer>
    {(graphqlService) => <Wrapped {...props} graphqlService={graphqlService} />}
  </GraphqlServiceConsumer>
);

export default withGraphqlService;
