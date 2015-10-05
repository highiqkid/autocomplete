import React, {Component} from 'react';

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
    return (
      <div
        dangerouslySetInnerHTML={this.createMarkup()}
      />
    );
  }
}

OutputText.propTypes = {
  value: React.PropTypes.string.isRequired,
};

export default OutputText
