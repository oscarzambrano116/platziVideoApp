import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import API from '../../../utils/api';

class Search extends Component {
  state = {
    text: '',
  }

  handleSubmit = async () => {
    const {
      state: {
        text,
      },
      props: {
        dispatch,
      }
    } = this;
    const movies = await API.searchMovie(text);
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0],
      },
    });
    dispatch(
      NavigationActions.navigate({
        routeName: 'Movie',
      })
    );
  }

  handleChangeText = (text) => {
    this.setState({ text });
  }

  render() {
    const {
      input,
    } = styles;

    return (
      <TextInput
        placeholder={'Busca tu película favorita'}
        autoCorrect={false}
        autoCapitalize={'none'}
        underlineColorAndroid={'transparent'}
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search);
