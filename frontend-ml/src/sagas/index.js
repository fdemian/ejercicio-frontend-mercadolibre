import { all, call } from 'redux-saga/effects';
import mainSaga from './mainSaga';

export default function* rootSaga(){
    yield all([
      call(mainSaga)
    ]);
}
