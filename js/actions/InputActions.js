import {TEXT_CHANGED} from '../constants/ActionTypes';


export function changeText(text) {
  return {
    type: TEXT_CHANGED,
    payload: {
      text
    }
  }
}
