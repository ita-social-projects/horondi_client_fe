import { combineReducers } from 'redux';
import news from './news/news.reduser';

const rootReducer = combineReducers({
  news
});
export default rootReducer;
