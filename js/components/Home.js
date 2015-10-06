import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ControlActions from '../actions/ControlActions';
import * as InputActions from '../actions/InputActions';
import styles from '../../css/app.css';
import InputPane from './InputPane'
import OutputPane from './OutputPane'
import Controls from './Controls';

class Home extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Home';
  }
  getActions() {
    const {dispatch} = this.props;
    return Object.assign({},
      bindActionCreators(ControlActions, dispatch),
      bindActionCreators(InputActions, dispatch)
    );
  }
  render() {
    const {notes, currentNote} = this.props;
    const actions = this.getActions();
    return (
      <main>
        <Controls {...this.props}
          onNoteChanged={actions.changeNote}
          onCreateNote={actions.createNote}
          onTitleChanged={actions.changeTitle}
        />
        <div className='row'>
          <InputPane
            note={notes[currentNote]}
            onChange={actions.changeText}
          />
          <OutputPane
            value={notes[currentNote].text}
          />
        </div>
      </main>
    );
  }
}

export default connect(state => state)(Home)
