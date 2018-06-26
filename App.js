/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/Home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>{'Header'}</Text>
        <Text>{'Buscador'}</Text>
        <Text>{'Categorias'}</Text>
        <Text>{'Sugerencias'}</Text>
      </Home>
    );
  }
}
