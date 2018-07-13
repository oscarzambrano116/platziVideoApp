import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';
import {
  createReduxBoundAddListener,
  initializeListeners,
  createDidUpdateCallback,
} from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener('root');
const didUpdate = createDidUpdateCallback('root');

class AppNavigatorWithState extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    initializeListeners('root', navigation);
  }

  componentDidUpdate() {
    return didUpdate();
  }

  render() {
    const {
      dispatch,
      navigation: navigationProp,
    } = this.props;

    const navigation = {
      dispatch,
      state: navigationProp,
      addListener,
    };

    return (
      <AppNavigator
        navigation={navigation}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);
