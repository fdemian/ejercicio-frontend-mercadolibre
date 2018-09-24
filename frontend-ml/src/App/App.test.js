import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  searchValue: "",
  products: [],
  isFetching: false,
  error: false,
  product: null
}

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<App /> ', () => {
  it('Render.', () => {
    const componentContainer = <Provider store={store}><App /></Provider>;
    expect(componentContainer).toBeTruthy();
  })
})
