import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE
} from '../../Navbar/Actions';

const imageSrc = "https://staticshop.o2.co.uk/product/images/iphone-x-space-grey-sku-header.png?cb=25dc5afb0412fc40a28aa29d82cb53d0";
const initial_products = [{
    id: 1,
    image: imageSrc,
    price: "$1980",
    localidad: "Buenos Aires",
    title: "I phone X. Negro igual a nuevo!",
    subtitle: "Completo, único!"
  },
  {
    id: 2,
    image: imageSrc,
    price: "$1980",
    title: "Apple I phone 9. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!"
  },
  {
    id: 3,
    image: imageSrc,
    price: "$1980",
    title: "I phone 8. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!"
  },
  {
    id: 4,
    image: imageSrc,
    price: "$1980",
    title: "I phone 7. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    subtitle: "Completo, único!"
  }
];

const initialState = {
  searchValue: "",
  products: initial_products,
  isFetching: false,
  error: false
}

function products(state = initialState, action) {

 switch (action.type) {

    case REQUEST_PRODUCTS:
      return {...state, isFetching: true};

    case RECEIVE_PRODUCTS:
      return {...state, data: action.data};

    case REQUEST_PRODUCTS_FAILURE:
      return {...state, error: true};

    case CHANGE_SEARCH_VALUE:
      return {...state, searchValue: action.value};

    default:
      return state;
  }

}

export default products;
