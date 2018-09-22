import { all, call } from 'redux-saga/effects';
import searchSaga from './searchSaga';

export default function* rootSaga(){
    yield all([
      call(searchSaga)
    ]);
}
