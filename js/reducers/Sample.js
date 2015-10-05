import * as ActionTypes from '../constants/ActionTypes';
import {addons} from 'react/addons';

const {update} = addons;

let defaultState = {
  title: 'Home'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGED:
      return update(state, {
        title: {
          $set: action.payload.text
        }
      });
    default:
      return state;
  }
}
