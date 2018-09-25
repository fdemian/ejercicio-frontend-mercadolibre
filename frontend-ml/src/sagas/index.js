import { all, call } from 'redux-saga/effects';
import productSaga from './productSaga';
import categorySaga from './categorySaga';

export default function* rootSaga(){
    yield all([
      call(productSaga),
      call(categorySaga)
    ]);
}
