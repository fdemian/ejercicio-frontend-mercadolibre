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
    id: 1,
    image: imageSrc,
    name: "I phone X",
    price: "$1980",
    localidad: "Buenos Aires",
    title: "I phone X. Negro igual a nuevo!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 2,
    image: imageSrc,
    name: "I phone 9",
    price: "$1980",
    title: "Apple I phone 9. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  }];

const props = {
  products: products,
}

describe('<SearchResults /> ', () => {

    it('<SearchResults /> with products.', () => {

      const enzymeWrapper = shallow(<SearchResults products={products} />);
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
      const resultBoxImg = enzymeWrapper.find('img');
      const productLink = enzymeWrapper.find(Link);

      // Main component asserts
      expect(boxContainer.contains('img'));
      expect(boxContainer.contains(Link));

      expect(resultBoxImg.props().src).toBe("http://url")
      expect(productLink.props().to).toBe("/items/1");
    })

    /*
    it('<SearchResults /> without products.', () => {

      const enzymeWrapper = mount(<SearchResults products={[]} />);
      console.log(enzymeWrapper);
      expect(enzymeWrapper.equals(null)).toBe(true);

    })*/

  })
