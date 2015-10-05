import * as ActionTypes from '../constants/ActionTypes';
import {addons} from 'react/addons';
import {combineReducers} from 'redux';
import {LOCAL_STORAGE_KEY} from '../constants/Constants';

const localStorage = require('local-storage');
const {update} = addons;

let localStorageState = {};
try {
  localStorageState = JSON.parse(localStorage.get(LOCAL_STORAGE_KEY)).Sample;
}
catch (e) {

}
const defaultState = Object.assign({
  dirty: false,
  text: ''
}, localStorageState);

const text = function(state = defaultState.text, action) {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGED:
      return action.payload.text;
    default:
      return state;
  }
}

const dirty = function(state = defaultState.dirty, action) {
  switch (action.type) {
    case ActionTypes.SAVE:
      return false;
    case ActionTypes.TEXT_CHANGED:
      return true;
    default:
      return state;
  }
}

const state = combineReducers({
  text,
  dirty
});

export default state;
