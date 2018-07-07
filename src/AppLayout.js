import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import CategoriesList from './videos/containers/CategoriesList';
import SuggestionsList from './videos/containers/SuggestionsList';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';
import Api from '../utils/api';

class AppLayout extends Component {
  async componentDidMount() {
    const { dispatch } = this.props
    const categoryList = await Api.getMovies();
    dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
    const suggestionList = await Api.getSuggestions(10);
    dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }

  render() {
    const { selectedMovie } = this.props;

    if (selectedMovie) return <Movie />;

    return (
      <Home>
        <Header />
        <Search />
        <CategoriesList />
        <SuggestionsList />
      </Home>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

export default connect(mapStateToProps)(AppLayout);
