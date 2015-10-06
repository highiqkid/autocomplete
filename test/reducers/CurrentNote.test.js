const {expect} = require('chai');
const currentNote = require('../../js/reducers/CurrentNote.js');


import * as ActionTypes from '../../js/constants/ActionTypes';

describe('CurrentNote reducer', function() {
  describe('initial load', function() {
    it('should return 0', function() {
      expect(currentNote(undefined, {})).to.equal(0);
    });
  });
  describe('unrecognized action', function() {
    it('should return the previous value', function() {
      expect(currentNote(42, {type: 'NOOP'})).to.equal(42);
    });
  });
  describe('NOTE_CHANGED', function() {
    it('should return the given note id', function() {
      expect(currentNote(42, {
        type: ActionTypes.NOTE_CHANGED,
        payload: {
          noteId: 43
        }
      })).to.equal(43);
    });
  });
  describe('NOTE_DELETED', function() {
    describe('when the noteId is 0', function() {
      it('should return 0', function() {
        expect(currentNote(42, {
          type: ActionTypes.NOTE_DELETED,
          payload: {
            noteId: 0
          }
        })).to.equal(0);
      });
    });
    describe('when the noteId is not zero', function() {
      it('should return n-1', function() {
        expect(currentNote(42, {
          type: ActionTypes.NOTE_DELETED,
          payload: {
            noteId: 43
          }
        })).to.equal(42);
      });
    });
  });
});
