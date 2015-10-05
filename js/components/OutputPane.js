import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';

const marked = require('marked');

import OutputText from './OutputText';

class OutputPane extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'OutputPane';
  }
  createMarkup() {
    return {
      __html: marked(this.props.value)
    }
  }
  render() {
    const classNames = classnames(
      'one-half',
      'column'
    );
    return (
      <div className={classNames}>
        <OutputText {...this.props}/>
      </div>
    );
  }
}

OutputPane.propTypes = {
  value: React.PropTypes.string.isRequired,
};

export default OutputPane
