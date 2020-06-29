import { combineReducers } from 'redux';

import News from './news/news.reducer';
import Article from './news-detail/news-detail.reducer';
import Categories from './categories/categories.reducer';
import Theme from './theme/theme.reducer';

const rootReducer = combineReducers({
  News,
  Categories,
  Article,
  Theme
});
export default rootReducer;
