import loadProducts,
{
  requestProducts,
  changeSearchValue,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS_FAILURE,
  CHANGE_SEARCH_VALUE
} from '../Actions';

import { runSaga } from 'redux-saga';

describe('<Navbar /> Actions', () => {

  it('Change search value', () => {
   const text = 'Mouse Inalambrico';
   const expectedAction = { type: CHANGE_SEARCH_VALUE, value: text };
   expect(changeSearchValue(text)).toEqual(expectedAction);
  })

  it('Request products', async () => {
   const expectedAction = { type: REQUEST_PRODUCTS };
   expect(requestProducts()).toEqual(expectedAction);
  })

  /*
  xit('Load products', () => {

    const dispatched = [];
    const endpointURL = "http://localhost:8000/api/items?q=";
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ products: { searchValue: 'test' } })
    }, loadProducts, endpointURL).done;

    console.log(dispatched);
  })
  */
  
})
