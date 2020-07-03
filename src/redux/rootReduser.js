import { combineReducers } from 'redux';
import News from './news/news.reducer';
import Language from './language/language.reducer';

const rootReducer = combineReducers({
  News,
  Language
});
export default rootReducer;
