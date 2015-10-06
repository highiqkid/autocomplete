const {
  expect
} = require('chai');
const notes = require('../../js/reducers/Notes.js');

import * as ActionTypes from '../../js/constants/ActionTypes';

describe('Notes reducer', function() {
  describe('initial load', function() {
    it('should return an array with one empty note', function() {
      expect(notes(undefined, {})).to.eql([{
        text: '',
        title: ''
      }]);
    });
  });
  describe('unrecognized action', function() {
    it('should return the previous value', function() {
      expect(notes(['test'], {
        type: 'NOOP'
      })).to.eql(['test']);
    });
  });

  describe('recognized actions', function() {
    let input, action;
    beforeEach(function() {
      input = [{
        text: 'original',
        title: 'original_title'
      }];
    })
    describe('TEXT_CHANGED', function() {
      beforeEach(function() {
        action = {
          type: ActionTypes.TEXT_CHANGED,
          payload: {
            noteId: 0,
            text: 'new'
          }
        }
      });
      it('should update the note\'s text', function() {
        expect(notes(input, action)).to.eql([{
          text: 'new',
          title: 'original_title'
        }])
      });
    });

    describe('NOTE_CREATED', function() {
      beforeEach(function() {
        action = {
          type: ActionTypes.NOTE_CREATED
        }
      });
      it('should append a new note to the end of the list', function() {
        expect(notes(input, action)).to.eql([{
          text: 'original',
          title: 'original_title'
        }, {
          text: '',
          title: ''
        }])
      });
    });

    describe('TITLE_CHANGED', function() {
      beforeEach(function() {
        action = {
          type: ActionTypes.TITLE_CHANGED,
          payload: {
            noteId: 0,
            title: 'new_title'
          }
        }
      });
      it('should update the note\'s title', function() {
        expect(notes(input, action)).to.eql([{
          text: 'original',
          title: 'new_title'
        }])
      });
    });

    describe('NOTE_DELETED', function() {
      beforeEach(function() {
        action = {
          type: ActionTypes.NOTE_DELETED,
          payload: {
            noteId: 0
          }
        }
      });
      it('should remove the note', function() {
        expect(notes(input, action)).to.eql([])
      });
    });

  })
});
