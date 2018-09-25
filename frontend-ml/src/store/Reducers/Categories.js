import {
  CHANGE_SEARCH_CATEGORIES,
  RESET_CATEGORIES
}
from '../../Navbar/Actions';

const initialState = { categories: [] };

function categories(state = initialState, action) {

 switch (action.type) {

    case CHANGE_SEARCH_CATEGORIES:
      return {...state, categories: action.data};

    case RESET_CATEGORIES:
      return {...state, categories: []};

    default:
      return state;
  }

}

export default categories;
