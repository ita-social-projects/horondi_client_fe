import { combineReducers } from 'redux';
import News from './news/news.reducer';

const rootReducer = combineReducers({
  News
});
export default rootReducer;
