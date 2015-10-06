import {TEXT_CHANGED} from '../constants/ActionTypes';


export function changeText(text) {
  return function(dispatch, getState) {
    dispatch({
      type: TEXT_CHANGED,
      payload: {
        text,
        noteId: getState().currentNote
      }
    });
  }
}
