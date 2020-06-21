import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
