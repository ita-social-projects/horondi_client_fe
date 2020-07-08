import { combineReducers } from 'redux';

import News from './news/news.reducer';
import Categories from './categories/categories.reducer';
import Theme from './theme/theme.reducer';
import Language from './language/language.reducer';
import User from './user/user.reducer';

const rootReducer = combineReducers({
  News,
  Categories,
  Theme,
  Language,
  User
});
export default rootReducer;
