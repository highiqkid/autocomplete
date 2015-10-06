import * as ActionTypes from '../constants/ActionTypes';
import {
  addons
}
from 'react/addons';

const {
  update
} = addons;

const createNote = function() {
  return {
    text: '',
    title: ''
  };
}

const notes = function(state = [createNote()], action) {
  switch (action.type) {
    case ActionTypes.TEXT_CHANGED:
      return update(state, {
        [action.payload.noteId]: {
          text: {
            $set: action.payload.text
          }
        }
      });
    case ActionTypes.NOTE_CREATED:
      return update(state, {
        $push: [createNote()]
      });
    case ActionTypes.TITLE_CHANGED:
      return update(state, {
        [action.payload.noteId]: {
          title: {
            $set: action.payload.title
          }
        }
      });
    case ActionTypes.NOTE_DELETED:
      return update(state, {
        $splice: [
          [action.payload.noteId, 1]
        ]
      });
    default:
      return state;
  }
}

export default notes
