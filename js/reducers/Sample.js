import * as ActionTypes from '../constants/ActionTypes';
import {addons} from 'react/addons';

const {update} = addons;

let defaultState = {
  text: ''
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGED:
      return update(state, {
        text: {
          $set: action.payload.text
        }
      });
    default:
      return state;
  }
}
