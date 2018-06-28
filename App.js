/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Video from 'react-native-video';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import CategoriesList from './src/videos/containers/CategoriesList';
import Player from './src/player/containers/Player';
import Api from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  }

  async componentDidMount() {
    const movies = await Api.getSuggestions(10);
    const categories = await Api.getMovies();

    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }

  render() {
    const {
      suggestionList,
      categoryList,
    } = this.state;

    return (
      <Home>
        <Header />
        <Player />
        <Text>{'Buscador'}</Text>
        <Text>{'Categorias'}</Text>
        <Text>{'Sugerencias'}</Text>
        <CategoriesList
          list={categoryList}
        />
        <SuggestionsList
          list={suggestionList}
        />
      </Home>
    );
  }
}
