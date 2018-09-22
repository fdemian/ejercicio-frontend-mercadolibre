import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE
} from '../../Navbar/Actions';

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false
}

export function products(state = initialState, action) {

 switch (action.type) {

    case REQUEST_PRODUCTS:
      return {...state, isFetching: true};

    case RECEIVE_PRODUCTS:
      return {...state, data: action.data};

    case REQUEST_PRODUCTS_FAILURE:
      return {...state, error: true};

    case CHANGE_SEARCH_VALUE:
      return {...state, searchValue: action.data};

    default:
      return state;
  }

}

export default products;
