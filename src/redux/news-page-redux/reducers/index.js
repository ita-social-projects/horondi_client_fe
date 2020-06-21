import { combineReducers } from 'redux';
import newsReduser from './news-reduser/News-reduser';

const rootReducer = combineReducers({
  newsReduser
});
export default rootReducer;
