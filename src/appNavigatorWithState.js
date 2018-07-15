import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';
import {
  createReduxBoundAddListener,
  initializeListeners,
  createDidUpdateCallback,
} from 'react-navigation-redux-helpers';
import {
  BackHandler,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const addListener = createReduxBoundAddListener('root');
const didUpdate = createDidUpdateCallback('root');

class AppNavigatorWithState extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    initializeListeners('root', navigation);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentDidUpdate() {
    return didUpdate();
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch } = this.props;
    dispatch(
      NavigationActions.back({
        key: null,
      })
    );
    return true;
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
