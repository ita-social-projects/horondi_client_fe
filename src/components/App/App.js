import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import {
  cartService,
  catalogService,
  orderService,
  productService,
  userService,
  ratingService
} from '../../services';

import { StoreServiceProvider } from '../store-service-context';

import store from '../../store/store';

// import Routes from '../routes';

import Chat from '../chat';

const storeService = {
  cartService,
  catalogService,
  orderService,
  productService,
  userService,
  ratingService
};

const App = () => (
  <Provider store={store}>
    <StoreServiceProvider value={storeService}>
      <div className='App'>
        {/* <Routes /> */}
        <p>horondi</p>
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
        <Chat />
      </div>
    </StoreServiceProvider>
  </Provider>
);

export default App;
