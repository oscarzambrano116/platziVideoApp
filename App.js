/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
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
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const categoryList = await Api.getMovies();
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        categoryList,
      },
    });
    const suggestionList = await Api.getSuggestions(10);
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        suggestionList,
      },
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>{'Buscador'}</Text>
          <CategoriesList />
          <SuggestionsList />
        </Home>
      </Provider>
    );
  }
}
