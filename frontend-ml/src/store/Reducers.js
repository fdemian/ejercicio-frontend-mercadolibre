import { combineReducers } from 'redux';
import products from './Reducers/Products';

const rootReducer = combineReducers({ products });

export default rootReducer;
