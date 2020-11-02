import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
import { helloSaga } from './saga';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga)

export default store; 