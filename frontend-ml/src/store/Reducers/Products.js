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
    subtitle: "Completo, único!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 2,
    image: imageSrc,
    price: "$1980",
    title: "Apple I phone 9 fdjalñkffsñl. Negro igual a nuevo!",
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
