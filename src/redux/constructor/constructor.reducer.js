import { combineReducers } from 'redux';
import constructorBasic from './constructor-basic/constructor-basic.reducer';
import constructorBottom from './constructor-bottom/constructor-bottom.reducer';
import constructorFrontPocket from './constructor-front-pocket/constructor-front-pocket.reducer';
import constructorModel from './constructor-model/constructor-model.reducer';
import constructorPattern from './constructor-pattern/constructor-pattern.reducer';

export default combineReducers({
  constructorBasic,
  constructorBottom,
  constructorFrontPocket,
  constructorModel,
  constructorPattern
});
