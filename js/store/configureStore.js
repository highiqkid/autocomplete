import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';
import persistState from 'redux-localstorage';
import {LOCAL_STORAGE_KEY, DEBUG_STORAGE_KEY} from '../constants/Constants';

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
  let {devTools} = require('redux-devtools');
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(undefined, {
      key: DEBUG_STORAGE_KEY
    })
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    persistState(undefined, {
      key: LOCAL_STORAGE_KEY
    })
  )(createStore);
}

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
