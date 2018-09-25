import Fetch from '../store/Fetch';
import { put, call } from 'redux-saga/effects';
import { REQUEST_CATEGORY_INFO } from '../Navbar/Actions';

export const REQUEST_PRODUCT_DETAILS = "REQUEST_PRODUCT_DETAILS";
export const RECEIVE_PRODUCT_DETAILS = "RECEIVE_PRODUCT_DETAILS";
export const REQUEST_PRODUCT_DETAILS_FAILURE = "REQUEST_PRODUCT_DETAILS_FAILURE";

export function requestProductDetails(id){
  return {
    type: REQUEST_PRODUCT_DETAILS,
    id: id
  }
}

export default function* loadProductDetails(action){
  try {
    const productId = encodeURIComponent(action.id);
    const endpointBase = "/api/items/​​" + productId;
    const data = yield call(Fetch.GET, endpointBase, null, null);
    yield put({type: RECEIVE_PRODUCT_DETAILS, data: data.item});
    yield put({type: REQUEST_CATEGORY_INFO, id: data.item.categoryId});
  }
  catch(error) {
    yield put({type: REQUEST_PRODUCT_DETAILS_FAILURE, error: error});
  }
}
