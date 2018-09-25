import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails';

Enzyme.configure({ adapter: new Adapter() });

const testData = {
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
};

const matchParams = {params: {id: 1}, isExact: true, path: "", url: ""};

const props = {
  product: testData,
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
      expect(productImage.props().src).toBe("picture.png");

    })

  })
