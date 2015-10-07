{expect} = require('chai')
notes = require('../../js/reducers/Notes.js')

actionTypes = require('../../js/constants/actionTypes')

describe 'Notes reducer', ->
  describe 'initial load', ->
    it 'should return an array with one empty note', ->
      expect(notes(undefined, {})).to.eql [
        text: ''
        title: ''
       ]
  describe 'unrecognized @action', ->
    it 'should return the previous value', ->
      expect(notes([ 'test' ], type: 'NOOP')).to.eql [ 'test' ]
  describe 'recognized @actions', ->
    beforeEach ->
      @input = [
        text: 'original'
        title: 'original_title'
      ]
    describe 'TEXT_CHANGED', ->
      beforeEach ->
        @action =
          type: actionTypes.TEXT_CHANGED
          payload:
            noteId: 0
            text: 'new'
      it 'should update the note\'s text', ->
        expect(notes(@input, @action)).to.eql [
          text: 'new'
          title: 'original_title'
        ]
    describe 'NOTE_CREATED', ->
      beforeEach ->
        @action = type: actionTypes.NOTE_CREATED
      it 'should append a new note to the end of the list', ->
        expect(notes(@input, @action)).to.eql [
            text: 'original'
            title: 'original_title'
          ,
            text: ''
            title: ''
        ]
    describe 'TITLE_CHANGED', ->
      beforeEach ->
        @action =
          type: actionTypes.TITLE_CHANGED
          payload:
            noteId: 0
            title: 'new_title'
      it 'should update the note\'s title', ->
        expect(notes(@input, @action)).to.eql [
          text: 'original'
          title: 'new_title'
        ]
    describe 'NOTE_DELETED', ->
      beforeEach ->
        @action =
          type: actionTypes.NOTE_DELETED
          payload: noteId: 0
      it 'should remove the note', ->
        expect(notes(@input, @action)).to.eql []
