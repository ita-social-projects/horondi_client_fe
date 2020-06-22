import { combineReducers } from 'redux';
import newsReduser from './news-page/news-reduser';

const rootReducer = combineReducers({
  newsReduser
});
export default rootReducer;
