import { takeEvery } from 'redux-saga/effects';
import { loadCategoryInfo, REQUEST_CATEGORY_INFO } from '../Navbar/Actions';

export default function* searchSaga() {
  yield takeEvery(REQUEST_CATEGORY_INFO, loadCategoryInfo);
}
