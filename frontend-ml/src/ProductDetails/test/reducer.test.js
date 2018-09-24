import
{
  REQUEST_PRODUCT_DETAILS,
  RECEIVE_PRODUCT_DETAILS,
  REQUEST_PRODUCT_DETAILS_FAILURE,
} from '../Actions';

import reducer from '../../store/Reducers/Products';

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false,
  product: null
}

const product = {
  id: 1,
  image: "image",
  price: "$1980",
  localidad: "Buenos Aires",
  title: "I phone X. Negro igual a nuevo!",
  description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
};

describe('Test Product details reducer', () => {

  it('Return initial state.', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('Request product details.', () => {

    // Request products.

    const requestAction = {
      type: REQUEST_PRODUCT_DETAILS
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
      type: RECEIVE_PRODUCT_DETAILS,
      data: product
    };

    const receiveState = {
      searchValue: "",
      products: [],
      isFetching: false,
      error: false,
      product: product
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
      type: REQUEST_PRODUCT_DETAILS_FAILURE,
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
