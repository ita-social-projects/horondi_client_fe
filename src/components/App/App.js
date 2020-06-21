import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import Test from '../Test';
import Chat from '../chat';

import store from '../../store/store';

// import Routes from '../routes';

const App = () => (
  <Provider store={store}>
    <div className='App'>
      {/* <Routes /> */}
      <p>horondi</p>
      <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
      <Chat />
      <Test />
    </div>
  </Provider>
);

export default App;
