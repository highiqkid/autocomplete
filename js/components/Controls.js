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
    const {dirty, onSave} = this.props;
    const classNames = classnames(
      'row',
      inputStyles['controls']
    );
    return (
      <div className={classNames}>
        <button disabled={!dirty} onClick={onSave}>Save</button>
      </div>
    );
  }
}

InputText.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  dirty: React.PropTypes.bool.isRequired
};

export default InputText
