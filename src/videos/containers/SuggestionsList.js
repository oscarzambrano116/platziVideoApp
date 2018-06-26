import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';

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
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    );
  }
}

export default SuggestionsList;
