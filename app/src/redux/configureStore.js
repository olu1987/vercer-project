import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// Middlewares
import rootReducer from './rootReducer';

// apply middleware to redux
const middleware = [
  promiseMiddleware,
  thunk
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

/* eslint-disable no-underscore-dangle */
const configureStore = initialState => createStoreWithMiddleware(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */


export default configureStore();
