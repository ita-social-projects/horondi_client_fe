import { all } from 'redux-saga/effects';
import constructorBasicSaga from './constructor-basic/constructor-basic.sagas';
import constructorBottomSaga from './constructor-bottom/constructor-bottom.sagas';
import constructorFrontPocketSaga from './constructor-front-pocket/constructor-front-pocket.sagas';
import constructorModelSaga from './constructor-model/constructor-model.sagas';
import constructorPatternSaga from './constructor-pattern/constructor-pattern.sagas';

function* constructorSaga() {
  yield all([
    constructorBasicSaga(),
    constructorBottomSaga(),
    constructorFrontPocketSaga(),
    constructorModelSaga(),
    constructorPatternSaga()
  ]);
}

export default constructorSaga;
