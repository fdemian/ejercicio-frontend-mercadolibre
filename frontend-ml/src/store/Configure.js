import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';
import rootReducer from './Reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

function storeCreator() {

  const middleWareTools = compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      persistState()
  );

  return createStore(rootReducer, middleWareTools);
}

const store = storeCreator();

sagaMiddleware.run(rootSaga);

export default store;
