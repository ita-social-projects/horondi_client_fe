import { combineReducers } from 'redux';

import news from './news/news.reducer';
import categories from './categories/categories.reducer';
import theme from './theme/theme.reducer';
import language from './language/language.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
  news,
  categories,
  theme,
  language,
  user
});
export default rootReducer;
