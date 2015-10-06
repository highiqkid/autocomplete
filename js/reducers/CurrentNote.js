import * as ActionTypes from '../constants/ActionTypes';

const notes = function(state = 0, action) {
  switch (action.type) {
    case ActionTypes.NOTE_CHANGED:
      return action.payload.noteId;
    default:
      return state;
  }
}

export default notes
