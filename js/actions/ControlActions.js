import {NOTE_CREATED, NOTE_CHANGED, TITLE_CHANGED, NOTE_DELETED} from '../constants/ActionTypes';


export function changeNote(noteId) {
  return function(dispatch, getState) {
    const state = getState();
    if (noteId === state.currentNote) {
      return;
    }
    const currentNote = state.notes[state.currentNote];
    if (currentNote.title === '' && currentNote.text === '') {
      deleteNote()(dispatch, getState);
      noteId = noteId === 0 ? 0 : noteId - 1;
    }
    dispatch({
      type: NOTE_CHANGED,
      payload: {
        noteId
      }
    })
  }
}

export function createNote() {
  return function(dispatch, getState) {
    dispatch({
      type: NOTE_CREATED
    });
    changeNote(getState().notes.length - 1)(dispatch, getState);
  }
}

export function changeTitle(title) {
  return function(dispatch, getState) {
    const state = getState();
    dispatch({
      type: TITLE_CHANGED,
      payload: {
        title,
        noteId: state.currentNote
      }
    })
  }
}

export function deleteNote() {
  return function(dispatch, getState) {
    const state = getState();
    const currentNote = state.notes[state.currentNote];
    if (currentNote.text.length > 0 || currentNote.title.length > 0) {
      if (!window.confirm("Are you sure you want to delete this note?")) {
        return;
      }
    }
    dispatch({
      type: NOTE_DELETED,
      payload: {
        noteId: state.currentNote
      }
    })
    if (getState().notes.length === 0) {
      createNote()(dispatch, getState);
    }
  }
}
