import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE
} from '../../Navbar/Actions';

import {
  REQUEST_PRODUCT_DETAILS,
  RECEIVE_PRODUCT_DETAILS,
  REQUEST_PRODUCT_DETAILS_FAILURE
} from '../../ProductDetails/Actions';

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false,
  product: null
}

function products(state = initialState, action) {

 switch (action.type) {

    /* PRODUCTS SEARCH */
    case REQUEST_PRODUCTS:
      return {...state, isFetching: true};

    case RECEIVE_PRODUCTS:
      return {...state, products: action.data};

    case REQUEST_PRODUCTS_FAILURE:
      return {...state, error: true, isFetching: false};

    case CHANGE_SEARCH_VALUE:
      return {...state, searchValue: action.value};

    /* PRODUCT DETAILS */
    case REQUEST_PRODUCT_DETAILS:
      return {...state, isFetching: true};

    case RECEIVE_PRODUCT_DETAILS:
      return {...state, product: action.data};

    case REQUEST_PRODUCT_DETAILS_FAILURE:
      return {...state, error: true};

    default:
      return state;
  }

}

export default products;
