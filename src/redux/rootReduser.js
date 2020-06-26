import { combineReducers } from 'redux';
import news from './news/news.reduser';
import categories from './categories/categories.reduser';

const rootReducer = combineReducers({
  news,
  categories
});
export default rootReducer;
