import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import Test from '../Test';
import Chat from '../Chat';

import { GraphqlServiceProvider } from '../../graphqlServiceContext';
import { graphqlService } from '../../services';
import store from '../../store/store';

// import Routes from '../routes';

const App = () => (
  <Provider store={store}>
    <GraphqlServiceProvider value={graphqlService}>
      <div className='App'>
        {/* <Routes /> */}
        <p>horondi</p>
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
        <Chat />
        <Test />
      </div>
    </GraphqlServiceProvider>
  </Provider>
);

export default App;
