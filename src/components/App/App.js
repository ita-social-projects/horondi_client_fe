import React from 'react';
import { Provider } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import NewsContainer from 'src/pages/news-conteiner';
import Test from '../Test';
import configureStore from '../../store/store';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql',
//   headers: ['Content-Type: application/json', 'x-auth: Bearer']
// });

// import Routes from '../routes';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    {/* < ApolloProvider client={client}> */}
    <div className='App'>
      {/* <Routes /> */}
      <p>horondi</p>
      <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
      <Test />
      <NewsContainer />
    </div>
    {/* </ApolloProvider> */}
  </Provider>
);

export default App;
