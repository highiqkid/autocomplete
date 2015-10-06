const {expect} = require('chai');
const currentNote = require('../../js/reducers/CurrentNote.js');


import * as ActionTypes from '../../js/constants/ActionTypes';

describe('CurrentNote reducer', function() {
  describe('by default', function() {
    it('should return 0', function() {
      expect(currentNote(undefined, {})).to.equal(0);
    });
  });
  describe('NOTE_CHANGED', function() {

  });
});
