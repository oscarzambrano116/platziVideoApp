/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/Loading';
import AppNavigatorWithState from './src/appNavigatorWithState';

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}
