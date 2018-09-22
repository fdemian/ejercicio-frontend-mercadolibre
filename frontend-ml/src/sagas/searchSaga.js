import { takeEvery } from 'redux-saga/effects';
import loadProducts, { requestProducts } from '../Navbar/Actions';

export default function* searchSaga() {
  yield takeEvery(requestProducts, loadProducts);
}
