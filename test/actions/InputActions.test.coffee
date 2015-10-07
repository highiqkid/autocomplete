InputActions = require '../../js/actions/InputActions'
ActionTypes = require '../../js/constants/ActionTypes'
chai = require 'chai'
sinon = require 'sinon'
sinonChai = require 'sinon-chai'
chai.use sinonChai
{spy} = sinon
{expect} = chai

describe 'InputActions', ->
  beforeEach ->
    @dispatch = spy()
  describe 'changeText', ->
    beforeEach ->
      thunk = InputActions.changeText('some new text')
      getState = ->
        currentNote: 42
      thunk @dispatch, getState
    it 'should change the text', ->
      expect(@dispatch).to.have.been.calledWith
        type: ActionTypes.TEXT_CHANGED
        payload:
          text: 'some new text'
          noteId: 42
