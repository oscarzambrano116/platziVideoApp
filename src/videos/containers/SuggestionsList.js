import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionListLayout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class SuggestionsList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay sugerencias'} />
  )

  itemSeparator = () => (
    <VerticalSeparator />
  )

  renderItem = ({ item }) => (
    <Suggestion
      onPress={() => this.viewMovie(item)}
      {...item}
    />
  )

  viewMovie = (item) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
    dispatch(
      NavigationActions.navigate({
        routeName: 'Movie',
      })
    );
  }

  keyExtractor = ({ id }) => id.toString()

  render() {
    const {
      list,
    } = this.props

    return (
      <SuggestionListLayout
        title={'Recomendado para ti'}
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.videos.suggestionList,
  };
}

export default connect(mapStateToProps)(SuggestionsList);
