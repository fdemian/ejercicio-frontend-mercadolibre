import { takeEvery } from 'redux-saga/effects';
import loadProducts, { REQUEST_PRODUCTS } from '../Navbar/Actions';
import loadProductDetails, { REQUEST_PRODUCT_DETAILS } from '../ProductDetails/Actions';

export default function* searchSaga() {
  yield takeEvery(REQUEST_PRODUCTS, loadProducts);
  yield takeEvery(REQUEST_PRODUCT_DETAILS, loadProductDetails);
}
