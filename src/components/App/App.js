import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import { GraphqlServiceProvider } from '../../graphqlServiceContext';

import store from '../../store/store';

// import Routes from '../routes';

import Chat from '../Chat';

const App = () => (
  <Provider store={store}>
    <GraphqlServiceProvider>
      <div className='App'>
        {/* <Routes /> */}
        <p>horondi</p>
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
        <Chat />
      </div>
    </GraphqlServiceProvider>
  </Provider>
);

export default App;
