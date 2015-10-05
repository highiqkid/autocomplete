import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import * as InputActions from '../actions/InputActions';
import styles from '../../css/app.css';
import InputText from './InputText'
import OutputText from './OutputText'

class Home extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Home';
  }
  getActions() {
    const {dispatch} = this.props;
    return Object.assign({},
      bindActionCreators(HomeActions, dispatch),
      bindActionCreators(InputActions, dispatch)
    );
  }
  render() {
    const {text} = this.props;
    const actions = this.getActions();
    return (
      <main>
        <InputText
          value={text}
          onChange={actions.changeText}
        />
        <OutputText
          value={text}
        />
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
