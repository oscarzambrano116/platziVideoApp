import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class CategoriesList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay sugerencias'} />
  )

  itemSeparator = () => (
    <VerticalSeparator />
  )

  renderItem = ({ item }) => (
    <Suggestion {...item} />
  )

  keyExtractor = ({ id }) => id.toString()

  render() {
    const {
      list,
    } = this.props;

    return (
      <FlatList
        horizontal
        keyExtractor={this.keyExtractor}
        data={list}
        ListEmptyComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CategoriesList;
