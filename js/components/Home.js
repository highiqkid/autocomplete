import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import * as InputActions from '../actions/InputActions';
import styles from '../../css/app.css';
import InputPane from './InputPane'
import OutputPane from './OutputPane'
import Controls from './Controls';

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
    const {text, dirty} = this.props;
    const actions = this.getActions();
    return (
      <main>
        <Controls/>
        <div className='row'>
          <InputPane
            value={text}
            onChange={actions.changeText}
          />
          <OutputPane
            value={text}
          />
        </div>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
