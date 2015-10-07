import * as ControlActions from '../../js/actions/ControlActions';
import * as ActionTypes from '../../js/constants/ActionTypes';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const {
  spy
} = sinon;
const {
  expect
} = chai;

describe('ControlActions', function() {
  let dispatch;
  beforeEach(function() {
    dispatch = spy();
  });
  describe('changeNote', function() {
    describe('when the note is already the current note', function() {
      let thunk, getState;
      beforeEach(function() {
        thunk = ControlActions.changeNote(0);
        getState = () => {
          return {
            currentNote: 0
          };
        };
        thunk(dispatch, getState);
      });
      it('should not dispatch any actions', function() {
        expect(dispatch).to.not.have.been.called
      });
    });

    describe('when the current note is empty', function() {
      describe('when the current note is the first note', function() {
        let thunk, getState;
        beforeEach(function() {
          thunk = ControlActions.changeNote(1);
          getState = () => {
            return {
              currentNote: 0,
              notes: [{
                text: '',
                title: '',
              }, {
                text: 'text',
                title: 'title'
              }]
            };
          };
          thunk(dispatch, getState);
        });
        it('should delete the current note', function() {
          expect(dispatch.args[0][0]).to.eql({
            type: ActionTypes.NOTE_DELETED,
            payload: {
              noteId: 0
            }
          });
        });
        it('should change to the correct note', function() {
          expect(dispatch.args[1][0]).to.eql({
            type: ActionTypes.NOTE_CHANGED,
            payload: {
              noteId: 0
            }
          });
        });
      });
      describe('when the current note is NOT the first note', function() {
        let thunk, getState;
        beforeEach(function() {
          thunk = ControlActions.changeNote(0);
          getState = () => {
            return {
              currentNote: 1,
              notes: [{
                text: 'text',
                title: 'title'
              }, {
                text: '',
                title: '',
              }]
            };
          };
          thunk(dispatch, getState);
        });
        it('should delete the current note', function() {
          expect(dispatch.args[0][0]).to.eql({
            type: ActionTypes.NOTE_DELETED,
            payload: {
              noteId: 1
            }
          });
        });
        it('should change to the correct note', function() {
          expect(dispatch.args[1][0]).to.eql({
            type: ActionTypes.NOTE_CHANGED,
            payload: {
              noteId: 0
            }
          });
        });
      });
    });

    describe('default', function() {
      let thunk, getState;
      beforeEach(function() {
        thunk = ControlActions.changeNote(1);
        getState = () => {
          return {
            currentNote: 0,
            notes: [{
              text: 'text0',
              title: 'title0',
            }, {
              text: 'text',
              title: 'title'
            }]
          };
        };
        thunk(dispatch, getState);
      });
      it('should change to the correct note', function() {
        expect(dispatch.args[0][0]).to.eql({
          type: ActionTypes.NOTE_CHANGED,
          payload: {
            noteId: 1
          }
        });
      });
      it('should not delete any notes', function() {
        expect(dispatch.callCount).to.equal(1);
      })
    });
  });
});
