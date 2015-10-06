import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';
import controlStyles from '../../css/controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Controls';
  }

  handleTitleChange(e) {
    this.props.onTitleChanged(e.target.value);
  }

  handleNoteChange(e) {
    this.props.onNoteChanged(Number.parseInt(e.target.value, 10));
  }

  render() {
    const classNames = classnames(
      'row',
      styles['controls']
    );
    const firstRowClassNames = classnames(
      'row',
      controlStyles['first-row']
    )
    const currentNote = this.props.notes[this.props.currentNote];
    return (
      <div className={classNames}>
        <div className={firstRowClassNames}>
          <select className={controlStyles['notes-dropdown']} onChange={this.handleNoteChange.bind(this)} value={this.props.currentNote}>
          {
            this.props.notes.map( (note, index) => <option value={index} key={index}>{note.title}</option>)
          }
          </select>
          <button
            className={controlStyles['add-note']}
            onClick={this.props.onCreateNote}
            title="Add note"
          >
            +
          </button>
          <button
            className={controlStyles['delete-note']}
            onClick={this.props.onDeleteNote}
            title="Delete note"
          >
            -
          </button>
        </div>
        <div className='row'>
          <input
            className={controlStyles['title-input']}
            type='text'
            value={currentNote.title}
            placeholder='Note title'
            required={true}
            onChange={this.handleTitleChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  onCreateNote: React.PropTypes.func.isRequired,
  onDeleteNote: React.PropTypes.func.isRequired,
  onTitleChanged: React.PropTypes.func.isRequired,
  onNoteChanged: React.PropTypes.func.isRequired,
  currentNote: React.PropTypes.number.isRequired,
  notes: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string
  })).isRequired
};

export default Controls
