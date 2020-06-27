import { combineReducers } from 'redux';
import Categories from './categories/categories.reduser';
import News from './news/news.reducer';
import Language from './language/language.reducer';

const rootReducer = combineReducers({
  News,
  Categories,
  Language
});
export default rootReducer;
