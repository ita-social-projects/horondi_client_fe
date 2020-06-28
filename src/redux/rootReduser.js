import { combineReducers } from 'redux';
import News from './news/news.reducer';
import User from './user/user.reducer';

const rootReducer = combineReducers({
  News,
  User
});
export default rootReducer;
