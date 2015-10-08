import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';
import inputStyles from '../../css/inputText.css';

import InputText from './InputText';

class InputPane extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'InputPane';
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const classNames = classnames(
      'one-half',
      'column',
      styles['input-pane']
    );
    return (
      <div className={classNames}>
        <span>Raw markdown...</span>
        <InputText {...this.props}/>
      </div>
    );
  }
}

InputPane.propTypes = {
  note: React.PropTypes.shape({
    text: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default InputPane
