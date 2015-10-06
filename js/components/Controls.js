import React, {Component} from 'react';

import classnames from 'classnames';

import styles from '../../css/app.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Controls';
  }
  render() {
    const classNames = classnames(
      'row',
      styles['controls']
    );
    return (
      <div className={classNames}>
      </div>
    );
  }
}

Controls.propTypes = {
};

export default Controls
