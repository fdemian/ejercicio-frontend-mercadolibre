/*import
{
  GET_USER_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_INFO_FAILURE,
  GET_USER_STORIES,
  RECEIVE_USER_STORIES,
  RECEIVE_USER_STORIES_FAILURE
}
from '../../User/Actions';*/

const initialState = {
  products: [],
  isFetching: true,
  error: false
}

export function products(state = initialState, action) {

 switch (action.type) {

    default:
      return state;
  }

}

export default products;
