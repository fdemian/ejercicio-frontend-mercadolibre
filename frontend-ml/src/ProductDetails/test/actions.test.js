import loadProductDetails,
{
  requestProductDetails,
  REQUEST_PRODUCT_DETAILS,
  RECEIVE_PRODUCT_DETAILS,
  REQUEST_PRODUCT_DETAILS_FAILURE
} from '../Actions';

import { runSaga } from 'redux-saga';

describe('<ProductDetail /> Actions', () => {

  it('Request product details', async () => {
   const expectedAction = { type: REQUEST_PRODUCT_DETAILS };
   expect(requestProductDetails()).toEqual(expectedAction);
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
