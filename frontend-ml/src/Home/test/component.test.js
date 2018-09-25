import React from 'react';
import Enzyme, { mount }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import Home from '../Home';
import SearchResults from '../../SearchResults/Container';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home /> ', () => {
  it('<Home /> component', () => {

    const initialState = {
      searchValue: "",
      products: [],
      categories: { categories: []},
      isFetching: false,
      error: false,
      product: null
    };

    const mockStore = configureMockStore();
    const store = mockStore(initialState);

    const enzymeWrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const componentContainer = enzymeWrapper.find('div');

    expect(componentContainer.length).toBe(1);
    expect(componentContainer.contains(SearchResults));
  })
})
