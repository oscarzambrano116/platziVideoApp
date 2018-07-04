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
    list: state.suggestionList,
  };
}

export default connect(mapStateToProps)(SuggestionsList);
