import * as ActionTypes from '../constants/ActionTypes';
import {addons} from 'react/addons';
import {combineReducers} from 'redux';
import {LOCAL_STORAGE_KEY} from '../constants/Constants';

const {update} = addons;

const text = function(state = '', action) {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGED:
      return action.payload.text;
    default:
      return state;
  }
}

const dirty = function(state = false, action) {
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
