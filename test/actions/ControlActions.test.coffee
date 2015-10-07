ControlActions = require('../../js/actions/ControlActions')
ActionTypes = require('../../js/constants/ActionTypes')
chai = require('chai')
sinon = require('sinon')
sinonChai = require('sinon-chai')
chai.use sinonChai
{spy} = sinon
{expect} = chai

describe 'ControlActions', ->
  beforeEach ->
    @dispatch = spy()
  describe 'changeNote', ->
    describe 'when the note is already the current note', ->
      beforeEach ->
        thunk = ControlActions.changeNote(0)
        getState = ->
          currentNote: 0
        thunk @dispatch, getState
      it 'should not @dispatch any actions', ->
        expect(@dispatch).to.not.have.been.called
    describe 'when the current note is empty', ->
      describe 'when the current note is the first note', ->
        beforeEach ->
          thunk = ControlActions.changeNote(1)
          getState = ->
            currentNote: 0
            notes: [
              text: ''
              title: ''
            ,
              text: 'text'
              title: 'title'
            ]
          thunk @dispatch, getState
        it 'should delete the current note', ->
          expect(@dispatch.args[0][0]).to.eql
            type: ActionTypes.NOTE_DELETED
            payload: noteId: 0
        it 'should change to the correct note', ->
          expect(@dispatch.args[1][0]).to.eql
            type: ActionTypes.NOTE_CHANGED
            payload: noteId: 0
      describe 'when the current note is NOT the first note', ->
        beforeEach ->
          thunk = ControlActions.changeNote(0)

          getState = ->
            currentNote: 1
            notes: [
              text: 'text'
              title: 'title'
            ,
              text: ''
              title: ''
            ]

          thunk @dispatch, getState
        it 'should delete the current note', ->
          expect(@dispatch.args[0][0]).to.eql
            type: ActionTypes.NOTE_DELETED
            payload: noteId: 1
        it 'should change to the correct note', ->
          expect(@dispatch.args[1][0]).to.eql
            type: ActionTypes.NOTE_CHANGED
            payload: noteId: 0
    describe 'default', ->
      beforeEach ->
        thunk = ControlActions.changeNote(1)
        getState = ->
          currentNote: 0
          notes: [
            text: 'text0'
            title: 'title0'
          ,
            text: 'text'
            title: 'title'
          ]
        thunk @dispatch, getState
      it 'should change to the correct note', ->
        expect(@dispatch.args[0][0]).to.eql
          type: ActionTypes.NOTE_CHANGED
          payload: noteId: 1
      it 'should not delete any notes', ->
        expect(@dispatch.callCount).to.equal 1

  describe 'createNote', ->
    beforeEach ->
      thunk = ControlActions.createNote()
      getState = ->
        currentNote: 0
        notes: [
          title: 'title'
          text: 'text'
        ,
          title: 'title2'
          text: 'text2'
        ]
      thunk @dispatch, getState
    it 'should create a note', ->
      expect(@dispatch.firstCall).to.have.been.calledWith
        type: ActionTypes.NOTE_CREATED

    it 'should change to the new note', ->
      expect(@dispatch.secondCall).to.have.been.calledWith
        type: ActionTypes.NOTE_CHANGED
        payload:
          noteId: 1

  describe 'changeTitle', ->
    beforeEach ->
      thunk = ControlActions.changeTitle('aNewTitle')
      getState = ->
        currentNote: 0
        notes: [
          title: 'title'
          text: 'text'
        ]
      thunk @dispatch, getState
    it 'should change the current note\'s title', ->
      expect(@dispatch).to.have.been.calledWith
        type: ActionTypes.TITLE_CHANGED,
        payload:
          title: 'aNewTitle'
          noteId: 0

  describe 'deleteNote', ->
    describe 'when deleting an empty note', ->
      describe 'when it isn\'t the last remaining note', ->
        beforeEach ->
          @confirmStub = sinon.stub window, 'confirm', ()-> false
          thunk = ControlActions.deleteNote()
          getState = ->
            currentNote: 0
            notes: [
              title: ''
              text: ''
            ,
              text: ''
              title: ''
            ]
          thunk @dispatch, getState
        it 'should delete the note', ->
          expect(@dispatch.firstCall).to.have.been.calledWith
            type: ActionTypes.NOTE_DELETED
            payload:
              noteId: 0
        it 'should not prompt the user', ->
          expect(@confirmStub).to.not.have.been.called
        it 'should not create a new note', ->
          expect(@dispatch.callCount).to.equal 1
        afterEach ->
          @confirmStub.restore()

      describe 'when it is the last remaining note', ->
        beforeEach ->
          @confirmStub = sinon.stub window, 'confirm', ()-> false
          thunk = ControlActions.deleteNote()
          getState = sinon.stub()
          getState.onFirstCall().returns
            currentNote: 0
            notes: [
              title: ''
              text: ''
            ]
          getState.onSecondCall().returns
            currentNote: 0
            notes: []
          getState.returns
            currentNote: 0
            notes: [
              title: ''
              text: ''
            ]
          thunk @dispatch, getState
        it 'should delete the note', ->
          expect(@dispatch.firstCall).to.have.been.calledWith
            type: ActionTypes.NOTE_DELETED
            payload:
              noteId: 0
        it 'should not prompt the user', ->
          expect(@confirmStub).to.not.have.been.called
        it 'should create a new note', ->
          expect(@dispatch.secondCall).to.have.been.calledWith
            type: ActionTypes.NOTE_CREATED
        afterEach ->
          @confirmStub.restore()

    describe 'when deleting a note with content', ->
      describe 'when the user cancels the deletion', ->
        beforeEach ->
          @confirmStub = sinon.stub window, 'confirm', ()-> false
          @thunk = ControlActions.deleteNote()
          getState = ->
            currentNote: 0
            notes: [
              title: 'title'
              text: 'text'
            ,
              title: 'title2'
              text: 'text2'
            ]
          @thunk @dispatch, getState
        it 'should prompt the user', ->
          expect(window.confirm).to.have.been.called
        it 'should not dispatch anything', ->
          expect(@dispatch).to.not.have.been.called
        afterEach ->
          @confirmStub.restore()

      describe 'when the user accepts the deletion', ->
        beforeEach ->
          @confirmStub = sinon.stub window, 'confirm', ()-> true
          @thunk = ControlActions.deleteNote()
          getState = ->
            currentNote: 0
            notes: [
              title: 'title'
              text: 'text'
            ,
              title: 'title2'
              text: 'text2'
            ]
          @thunk @dispatch, getState
        it 'should prompt the user', ->
          expect(window.confirm).to.have.been.called
        it 'should dispatch things', ->
          expect(@dispatch).to.have.been.called
        afterEach ->
          @confirmStub.restore()
