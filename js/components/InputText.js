import React, {Component} from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'InputText';
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <textarea
        onChange={this.handleChange.bind(this)}
        value={this.props.value}
      />
    );
  }
}

InputText.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default InputText
