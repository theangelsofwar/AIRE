import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducer';

const middleware = [
  thunkMiddleware,
];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState: any) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)), 
  );
  return store;
};
