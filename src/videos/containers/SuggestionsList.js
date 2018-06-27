import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionsListLayout from '../components/SuggestionsListLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';

class SuggestionsList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay sugerencias'} />
  )

  itemSeparator = () => (
    <VerticalSeparator />
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
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </SuggestionsListLayout>
    );
  }
}

export default SuggestionsList;
