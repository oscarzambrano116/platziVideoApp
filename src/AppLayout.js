import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import Player from './player/containers/Player';
import CategoriesList from './videos/containers/CategoriesList';
import SuggestionsList from './videos/containers/SuggestionsList';
import Api from '../utils/api';

class AppLayout extends Component {
  async componentDidMount() {
    const { dispatch } = this.props
    const categoryList = await Api.getMovies();
    dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        categoryList,
      },
    });
    const suggestionList = await Api.getSuggestions(10);
    dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        suggestionList,
      },
    });
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>{'Buscador'}</Text>
        <CategoriesList />
        <SuggestionsList />
      </Home>
    );
  }
}

export default connect(null)(AppLayout);
