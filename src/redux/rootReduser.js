import { combineReducers } from 'redux';
import Categories from './categories/categories.reduser';
import News from './news/news.reducer';
import Article from './news-detail/news-detail.reducer';

const rootReducer = combineReducers({
  News,
  Categories,
  Article
});
export default rootReducer;
