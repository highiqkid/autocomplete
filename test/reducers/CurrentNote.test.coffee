
{expect}= require 'chai'
currentNote = require '../../js/reducers/CurrentNote.js'
ActionTypes = require '../../js/constants/ActionTypes'
describe 'CurrentNote reducer', ->
  describe 'initial load', ->
    it 'should return 0', ->
      expect(currentNote(undefined, {})).to.equal 0
  describe 'unrecognized action', ->
    it 'should return the previous value', ->
      expect(currentNote 42, type: 'NOOP').to.equal 42
  describe 'NOTE_CHANGED', ->
    it 'should return the given note id', ->
      expect(currentNote 42,
        type: ActionTypes.NOTE_CHANGED
        payload:
          noteId: 43
      ).to.equal 43
  describe 'NOTE_DELETED', ->
    describe 'when the noteId is 0', ->
      it 'should return 0', ->
        expect(currentNote 42,
          type: ActionTypes.NOTE_DELETED
          payload:
            noteId: 0
        ).to.equal 0
    describe 'when the noteId is not zero', ->
      it 'should return n-1', ->
        expect(currentNote 42,
          type: ActionTypes.NOTE_DELETED
          payload:
            noteId: 43
        ).to.equal 42
