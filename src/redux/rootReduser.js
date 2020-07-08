import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import News from './news/news.reducer';
import Categories from './categories/categories.reducer';
import Theme from './theme/theme.reducer';
import Error from './error/error.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    News,
    Categories,
    Theme,
    Error
  });

export default rootReducer;
