import React from 'react';
import { Provider } from 'react-redux';
import { GraphqlServiceProvider } from '../../graphqlServiceContext';
import { graphqlService } from '../../services';
import store from '../../store/store';

import Routes from '../../routes';

const App = () => (
  <Provider store={store}>
    <GraphqlServiceProvider value={graphqlService}>
      <div className='App'>
        <Routes />
      </div>
    </GraphqlServiceProvider>
  </Provider>
);

export default App;
