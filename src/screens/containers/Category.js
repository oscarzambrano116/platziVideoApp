import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionListLayout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import VerticalSeparator from '../../sections/components/VerticalSeparator';
import Suggestion from '../../videos/components/Suggestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Category extends Component {
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
      navigation,
    } = this.props

    return (
      <SuggestionListLayout
        title={`${navigation.getParam('genre', 'Category')}`}
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
    list: state.videos.categoryList,
  };
}

export default connect(mapStateToProps)(Category);
