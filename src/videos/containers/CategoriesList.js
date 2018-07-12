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
import { NavigationActions } from 'react-navigation';

class CategoriesList extends Component {
  renderEmpty = () => (
    <Empty text={'No hay categorías'} />
  )

  itemSeparator = () => (
    <HorizontalSeparator />
  )

  viewCategory = (item) => {
    const { dispatch } = this.props;
    dispatch(
      NavigationActions.navigate({
        routeName: 'Category',
        params: {
          genre: item.genres[0],
        },
      })
    );
  }

  renderItem = ({ item } ) => (
    <Category
      onPress={() => this.viewCategory(item)}
      {...item}
    />
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
  return {
    list: state.videos.categoryList,
  };
}

export default connect(mapStateToProps)(CategoriesList);
