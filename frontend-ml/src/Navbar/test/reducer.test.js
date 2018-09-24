import
{
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE
} from '../Actions';

import reducer from '../../store/Reducers/Products';

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false,
  product: null
}

const imageSrc = "http://url";
const testData = [{
    id: 1,
    image: imageSrc,
    price: "$1980",
    localidad: "Buenos Aires",
    title: "I phone X. Negro igual a nuevo!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 2,
    image: imageSrc,
    price: "$1980",
    title: "Apple I phone 9. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  }];

describe('Test Products reducer', () => {

  it('Return initial state.', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('Change search value', () => {
    const action = {
      type: CHANGE_SEARCH_VALUE,
      value: "test"
    };

    const finalState = {
      searchValue: "test",
      products: [],
      isFetching: false,
      error: false,
      product: null
    }
    expect(reducer(initialState, action)).toEqual(finalState);
  })

  it('Request products.', () => {

    // Request products.

    const requestAction = {
      type: REQUEST_PRODUCTS
    };

    const requestState = {
      searchValue: "",
      products: [],
      isFetching: true,
      error: false,
      product: null
    }

    expect(reducer(initialState, requestAction)).toEqual(requestState);
  })


  it('Receieve products', () => {
    // Recieve Products

    const requestState = {
      searchValue: "",
      products: [],
      isFetching: true,
      error: false,
      product: null
    }

    const recieveAction = {
      type: RECEIVE_PRODUCTS,
      data: testData
    };

    const receiveState = {
      searchValue: "",
      products: testData,
      isFetching: false,
      error: false,
      product: null
    };

    expect(reducer(requestState, recieveAction)).toEqual(receiveState);
  })

  it('Recieve products failure', () => {

    const requestState = {
      searchValue: "",
      products: [],
      isFetching: true,
      error: false,
      product: null
    }

    // Recieve products failure.
    const error = { status: 500, message: "Server error" };
    const failAction = {
      type: REQUEST_PRODUCTS_FAILURE,
      error: error
    };

    const failState = {
      searchValue: "",
      products: [],
      isFetching: false,
      error: true,
      product: null
    };

    expect(reducer(requestState, failAction)).toEqual(failState);

  })


})
