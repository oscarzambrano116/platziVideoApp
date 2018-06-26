import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import SuggestionsListLayout from '../components/SuggestionsListLayout';

class SuggestionsList extends Component {
  render() {
    const list = [
      {
        key: '1',
        title: 'Text 1',
      },
      {
        key: '2',
        title: 'Text 2',
      },
    ];

    return (
      <SuggestionsListLayout
        title={'Recomendado para ti'}
      >
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </SuggestionsListLayout>
    );
  }
}

export default SuggestionsList;
