import * as ActionTypes from '../constants/ActionTypes';

const currentNote = function(state = 0, action) {
  switch (action.type) {
    case ActionTypes.NOTE_CHANGED:
      return action.payload.noteId;
    case ActionTypes.NOTE_DELETED:
      if (action.payload.noteId === 0) {
        return 0;
      }
      else {
        return action.payload.noteId - 1;
      }
    default:
      return state;
  }
}

export default currentNote
