import { combineReducers } from 'redux';
import Categories from './categories/categories.reduser';
import News from './news/news.reducer';

const rootReducer = combineReducers({
  News,
  Categories
});
export default rootReducer;
