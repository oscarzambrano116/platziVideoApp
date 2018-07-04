import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

class Search extends Component {
  state = {
    text: '',
  }

  handleSubmit = () => {
    const { text } = this.state;
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

export default Search;
