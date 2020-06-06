import React from 'react';
import { StoreServiceConsumer } from '../store-service-context';

const withStoreService = () => (Wrapped) => (props) => (
  <StoreServiceConsumer>
    {(storeService) => <Wrapped {...props} storeService={storeService} />}
  </StoreServiceConsumer>
);

export default withStoreService;
