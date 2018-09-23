import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REQUEST_PRODUCTS_FAILURE = "REQUEST_PRODUCTS_FAILURE";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

export function requestProducts(){
  return {
    type: REQUEST_PRODUCTS
  }
}

export function changeSearchValue(value){
  return {
    type: CHANGE_SEARCH_VALUE,
    value: value
  }
}

export default function* loadProducts(){
  try {
    const state = yield select();
    const query = state.products.searchValue.toString().trim();
    const endpointBase = "http://localhost:8000/api/items?q=​​";
    const products = yield call(Fetch.GET, endpointBase + query, null, null);
    yield put({type: RECEIVE_PRODUCTS, data: products});
  }
  catch(error) {
    yield put({type: REQUEST_PRODUCTS_FAILURE, error: error});
  }
}
