import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

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
    const endpointBase = "http://localhost:8000/api/items/​​" + productId;
    const data = yield call(Fetch.GET, endpointBase, null, null);
    console.log(data.item);
    yield put({type: RECEIVE_PRODUCT_DETAILS, data: data.item});
  }
  catch(error) {
    yield put({type: REQUEST_PRODUCT_DETAILS_FAILURE, error: error});
  }
}
