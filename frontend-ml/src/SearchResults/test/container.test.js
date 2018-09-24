import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme,  { shallow, mount, render }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Container from '../Container';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  searchFn: jest.fn(),
  changeInput: jest.fn()
}

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false,
  product: null
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

const WithStore = ({component, store}) => {
  return(
  <Provider store={store}>
    {component}
  </Provider>
  )
};

describe('<Navbar />  Container', () => {

  it('<Container /> ', () => {
   const component = (<WithStore component={Container} store={store} />);
   expect(component).toBeTruthy();
  })

})
