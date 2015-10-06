import {NOTE_CREATED, NOTE_CHANGED, TITLE_CHANGED} from '../constants/ActionTypes';


export function changeNote(noteId) {
  return {
    type: NOTE_CHANGED,
    payload: {
      noteId
    }
  }
}

export function createNote() {
  return function(dispatch, getState) {
    dispatch({
      type: NOTE_CREATED
    });
    dispatch({
      type: NOTE_CHANGED,
      payload: {
        noteId: getState().notes.length - 1
      }
    });
  }
}

export function changeTitle(title) {
  return function(dispatch, getState) {
    dispatch({
      type: TITLE_CHANGED,
      payload: {
        title,
        noteId: getState().currentNote
      }
    })
  }
}
