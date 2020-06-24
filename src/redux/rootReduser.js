import { combineReducers } from 'redux';

import news from './news/news.reducer';
import categories from './home-categories/categories.reducer';

const rootReducer = combineReducers({
  news,
  categories
});
export default rootReducer;
