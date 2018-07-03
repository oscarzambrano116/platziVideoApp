import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import CategoryListLayout from '../components/CategoryListLayout';
import Empty from '../components/Empty';
import HorizontalSeparator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import { connect } from 'react-redux';

class CategoriesList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay categorías'} />
  )

  itemSeparator = () => (
    <HorizontalSeparator />
  )

  renderItem = ({ item } ) => (
    <Category {...item} />
  )

  keyExtractor = ({ id }) => id.toString()

  render() {
    const {
      list,
    } = this.props;

    return (
      <CategoryListLayout
        title={'Categorías'}
      >
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CategoryListLayout>
    );
  }
}

function mapStateToProps(state) {
  debugger
}

export default connect(mapStateToProps)(CategoriesList);
