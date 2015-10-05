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
      'column'
    );
    return (
      <div className={classNames}>
        <InputText {...this.props} />
      </div>
    );
  }
}

InputPane.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default InputPane
