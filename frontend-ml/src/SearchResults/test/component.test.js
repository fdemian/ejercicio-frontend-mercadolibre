import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SearchResults from '../SearchResults';
import ResultBox from '../ResultBox';

Enzyme.configure({ adapter: new Adapter() });

const imageSrc = "http://url";
const products = [{
    id: "MLA0000",
    title: "Iphone X Nuevo!",
    price: {
      currency: "ARS",
      amount: 1000,
      decimals: 99
    },
    picture: "picture.png",
    condition: "new",
    free_shipping: true
  },
  {
    id: "MLA0001",
    title: "Iphone 9 Nuevo!",
    price: {
       currency: "ARS",
       amount: 2000,
       decimals: 0
    },
    picture: "picture2.png",
    condition: "new",
    free_shipping: false
  }
];

const props = {
  products: products,
  searchValue: "",
  categories: []
}

describe('<SearchResults /> ', () => {

    it('<SearchResults /> with products.', () => {

      const enzymeWrapper = shallow(<SearchResults {...props} />);
      const componentContainer = enzymeWrapper.find('.SearchResultsContainer');
      const resultBoxes = enzymeWrapper.find(ResultBox);

      // Main component asserts
      expect(componentContainer.length).toBe(1);
      expect(resultBoxes.length).toBe(2);
    })

    it('<ResultBox />', () => {

      const enzymeWrapper = mount(
        <MemoryRouter>
          <ResultBox product={products[0]} />
        </MemoryRouter>
      );
      const boxContainer = enzymeWrapper.find('.ResultBoxContainer');
      const resultBoxImg = enzymeWrapper.find('.ResultBoxImage');
      const shippingImg = enzymeWrapper.find('.ShippingLogo');
      const productLink = enzymeWrapper.find(Link);

      // Main component asserts
      expect(boxContainer.contains('img'));
      expect(boxContainer.contains(Link));

      expect(resultBoxImg.props().src).toBe("picture.png");
      expect(shippingImg.props().alt).toBe("Free shipping");
      expect(productLink.props().to).toBe("/items/MLA0000");
    })

    /*
    it('<SearchResults /> without products.', () => {

      const enzymeWrapper = mount(<SearchResults products={[]} />);
      console.log(enzymeWrapper);
      expect(enzymeWrapper.equals(null)).toBe(true);

    })*/

  })
