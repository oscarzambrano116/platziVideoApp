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
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import Api from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    Api.getSuggestions(10);
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>{'Buscador'}</Text>
        <Text>{'Categorias'}</Text>
        <Text>{'Sugerencias'}</Text>
        <SuggestionsList />
      </Home>
    );
  }
}
