import { takeEvery } from 'redux-saga/effects';
import loadProducts, { REQUEST_PRODUCTS } from '../Navbar/Actions';

export default function* searchSaga() {
  yield takeEvery(REQUEST_PRODUCTS, loadProducts);
}
