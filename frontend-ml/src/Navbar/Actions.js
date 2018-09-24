import Fetch from '../store/Fetch';
import { select, put, call } from 'redux-saga/effects';

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REQUEST_PRODUCTS_FAILURE = "REQUEST_PRODUCTS_FAILURE";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

const imageSrc = "https://staticshop.o2.co.uk/product/images/iphone-x-space-grey-sku-header.png?cb=25dc5afb0412fc40a28aa29d82cb53d0";
const initialProducts = [{
    id: 1,
    image: imageSrc,
    price: "$1980",
    localidad: "Buenos Aires",
    title: "I phone X. Negro igual a nuevo!",
    subtitle: "Completo, único!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 2,
    image: imageSrc,
    price: "$1980",
    title: "Apple I phone 9. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 3,
    image: imageSrc,
    price: "$1980",
    title: "I phone 8. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 4,
    image: imageSrc,
    price: "$1980",
    title: "I phone 7. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  }
];

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

export default function* loadProducts(action){
  try {
    const state = yield select();
    const query = `'${state.products.searchValue}'`;
    const endpoint = `http://localhost:8000/api/items?q=​${query}`;
    console.log(endpoint);
    const data = yield call(Fetch.GET, endpoint, null, null);
    yield put({type: RECEIVE_PRODUCTS, data: data.results});
  }
  catch(error) {
    yield put({type: REQUEST_PRODUCTS_FAILURE, error: error});
  }
}
