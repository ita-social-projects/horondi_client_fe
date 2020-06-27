import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import configureStore from '../../store/store';

import Routes from '../../routes';
import Language from '../language/Language';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Language />
    <Routes />
    <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
  </Provider>
);

export default App;
