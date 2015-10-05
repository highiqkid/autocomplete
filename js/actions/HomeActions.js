import {SAVE} from '../constants/ActionTypes';
import {LOCAL_STORAGE_KEY} from '../constants/Constants';

const localStorage = require('local-storage');

export function save() {
  return function(dispatch, getState) {
    dispatch({
      type: SAVE
    });
    localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(getState()));
  }
}
