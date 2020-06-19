import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import Test from '../Test';
import Chat from '../chat';

import { ApolloServiceProvider } from '../../services/ApolloService/ApolloServiceContext';
import { client } from '../../services/ApolloService/ApolloService';
import store from '../../store/store';

// import Routes from '../routes';

const App = () => (
  <Provider store={store}>
    <ApolloServiceProvider value={client}>
      <div className='App'>
        {/* <Routes /> */}
        <p>horondi</p>
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
        <Chat />
        <Test />
      </div>
    </ApolloServiceProvider>
  </Provider>
);

export default App;
