import { CHANGE_SEARCH_CATEGORIES } from '../../Navbar/Actions';

const initialState = { categories: [] };

function categories(state = initialState, action) {

 switch (action.type) {

    case CHANGE_SEARCH_CATEGORIES:
      return {...state, categories: action.data};

    default:
      return state;
  }

}

export default categories;
