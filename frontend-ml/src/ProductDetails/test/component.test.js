import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails';

Enzyme.configure({ adapter: new Adapter() });

const imageSrc = "http://url";
const testData = [{
    id: 1,
    image: imageSrc,
    name: "Iphone",
    price: "$1980",
    localidad: "Buenos Aires",
    title: "I phone X. Negro igual a nuevo!",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  },
  {
    id: 2,
    image: imageSrc,
    name: "Iphone",
    price: "$1980",
    title: "Apple I phone 9. Negro igual a nuevo!",
    localidad: "Buenos Aires",
    description: "The Iphone is a smartphone that was designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. It was announced on September 12, 2017, alongside the iPhone 8 and iPhone 8 Plus, at the Steve Jobs Theater in the Apple Park campus. The phone was released on November 3, 2017, so this device marks the iPhone series' tenth anniversary."
  }];

const matchParams = {params: {id: 1}, isExact: true, path: "", url: ""};

const props = {
  products: testData,
  product: testData[0],
  match: matchParams,
  onLoad: jest.fn()
}

describe('<ProductDetails /> ', () => {

    it('<ProductDetails /> component', () => {

      const enzymeWrapper = mount(
       <MemoryRouter>
        <ProductDetails {...props} />
      </MemoryRouter>
      );

      const componentContainer = enzymeWrapper.find('.ProductDetailsContainer');
      const purchaseButton = enzymeWrapper.find('button');
      const productImage = enzymeWrapper.find('img');

      // Main component asserts
      expect(componentContainer.length).toBe(1);
      expect(componentContainer.contains('button'));
      expect(componentContainer.contains('img'));
      
      // Button validation.
      expect(purchaseButton.text()).toBe("Comprar");

      // Image component validation
      expect(productImage.props().src).toBe("http://url");

    })

  })
