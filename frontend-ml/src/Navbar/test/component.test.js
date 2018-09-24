import React from 'react';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Container from '../Container';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  searchFn: jest.fn(),
  changeInput: jest.fn()
}

describe('<Navbar /> ', () => {

    it('<Navbar /> component', () => {

      const enzymeWrapper = mount(
       <MemoryRouter>
        <Navbar {...props} />
      </MemoryRouter>
      );

      const componentContainer = enzymeWrapper.find('.NavbarContainer');
      const homeLink = enzymeWrapper.find(Link);
      const searchInput = enzymeWrapper.find('input');
      const searchButton = enzymeWrapper.find('button');
      const companyLogo = homeLink.find('img');

      // Main component asserts
      expect(componentContainer.length).toBe(1);
      expect(componentContainer.contains(Link));
      expect(componentContainer.contains('button'));
      expect(componentContainer.contains('input'));

      // Home link validation.
      expect(homeLink.props().to).toBe("/");

      // Company logo validation.
      expect(companyLogo.props().src).toBe("Logo_ML.png");
      expect(companyLogo.props().alt).toBe("Mercado Libre");
      //expect(searchInput.props())

      // Search input validation.
      expect(searchInput.props().type).toBe("text");
      expect(searchInput.props().placeholder).toBe("Nunca dejes de buscar");

      searchButton.simulate('click');
      searchInput.simulate('keypress', {key: 'Enter'});
      searchInput.simulate('change', { target: {value: 'a'} });
    })
    
  })
