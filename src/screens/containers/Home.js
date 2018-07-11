import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import Api from '../../../utils/api';
import Header from '../../sections/components/Header';
import CategoriesList from '../../videos/containers/CategoriesList';
import SuggestionsList from '../../videos/containers/SuggestionsList';
import Movie from '../../screens/containers/Movie';
import Search from '../../sections/containers/Search';

class Home extends Component {
  static navigationOptions = () => {
    return {
      header: Header,
    };
  }

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
    return (
      <Fragment>
        <Search />
        <CategoriesList />
        <SuggestionsList />
      </Fragment>
    );
  }
}

export default connect(null)(Home);
