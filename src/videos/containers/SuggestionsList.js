import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionsListLayout from '../components/SuggestionsListLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionsList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay sugerencias'} />
  )

  itemSeparator = () => (
    <VerticalSeparator />
  )

  renderItem = ({ item }) => (
    <Suggestion {...item} />
  )

  render() {
    const list = [
      {
        key: '1',
        title: 'Avengers',
      },
      {
        key: '2',
        title: 'Pokemon',
      },
    ];

    return (
      <SuggestionsListLayout
        title={'Recomendado para ti'}
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionsListLayout>
    );
  }
}

export default SuggestionsList;
