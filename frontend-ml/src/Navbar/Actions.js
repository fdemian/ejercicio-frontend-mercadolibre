import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REQUEST_PRODUCTS_FAILURE = "REQUEST_PRODUCTS_FAILURE";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

export const CHANGE_SEARCH_CATEGORIES = "CHANGE_SEARCH_CATEGORIES";
export const RESET_CATEGORIES = "RESET_CATEGORIES";

export const REQUEST_CATEGORY_INFO  = "REQUEST_CATEGORY_INFO";
export const RECEIVE_CATEGORY_INFO  = "RECEIVE_CATEGORY_INFO";
export const RECEIVE_CATEGORY_FAIL  = "RECEIVE_CATEGORY_FAIL";

export function requestProducts(){
  return {
    type: REQUEST_PRODUCTS
  }
}

export function resetCategories(){
  return {
    type: RESET_CATEGORIES
  }
}

export function changeSearchValue(value){
  return {
    type: CHANGE_SEARCH_VALUE,
    value: value
  }
}

export default function* loadProducts(action){
  try {
    const state = yield select();
    const query = `'${state.products.searchValue}'`;
    const endpoint = `http://localhost:8000/api/items?q=​${query}`;
    const data = yield call(Fetch.GET, endpoint, null, null);
    const categoryId = data.mainCategory;
    yield put({type: RECEIVE_PRODUCTS, data: data.items});
    yield put({type: REQUEST_CATEGORY_INFO, id: categoryId});
  }
  catch(error) {
    yield put({type: REQUEST_PRODUCTS_FAILURE, error: error});
  }
}

export function* loadCategoryInfo(action){
  try {
    const endpoint = `/api/categories/${action.id}`;
    const data = yield call(Fetch.GET, endpoint, null, null);
    const parsedData = JSON.parse(data);
    const breadcrumbCategories = parsedData.path_from_root.map(d => d.name);
    yield put({type: CHANGE_SEARCH_CATEGORIES, data: breadcrumbCategories});
  }
  catch(error) {
    yield put({type: RECEIVE_CATEGORY_FAIL, error: error});
  }
}
