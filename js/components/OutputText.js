import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';

const marked = require('marked');

class OutputText extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'OutputText';
  }
  createMarkup() {
    return {
      __html: marked(this.props.value)
    }
  }
  render() {
    const classNames = classnames(
      styles['text-box'],
      styles['text']
    );
    return (
      <div
        className={classNames}
        dangerouslySetInnerHTML={this.createMarkup()}
      />
    );
  }
}

OutputText.propTypes = {
  value: React.PropTypes.string.isRequired,
};

export default OutputText
