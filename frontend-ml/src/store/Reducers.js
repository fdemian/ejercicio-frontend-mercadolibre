import { combineReducers } from 'redux';
import products from './Reducers/Products';
import categories from './Reducers/Categories';

const rootReducer = combineReducers({ products, categories });

export default rootReducer;
