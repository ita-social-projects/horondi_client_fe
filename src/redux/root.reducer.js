import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import News from './news/news.reducer';
import User from './user/user.reducer';
import Categories from './categories/categories.reducer';
import Theme from './theme/theme.reducer';
import Error from './error/error.reducer';
import Language from './language/language.reducer';
import Products from './products/products.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    User,
    News,
    Categories,
    Theme,
    Error,
    Language,
    Products
  });

export default rootReducer;
