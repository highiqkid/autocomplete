import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';
import inputStyles from '../../css/inputText.css';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'InputText';
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const classNames = classnames(
      styles['text-box'],
      styles['text'],
      inputStyles['text-box']
    );
    return (
      <textarea
        className={classNames}
        onChange={this.handleChange.bind(this)}
        value={this.props.value}
        spellcheck={true}
      />
    );
  }
}

InputText.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default InputText
