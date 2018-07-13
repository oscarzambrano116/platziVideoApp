import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
  handleLogin = () => {
    const token = 'ABCDEFGHIJK';
    const {
      dispatch,
      navigation: {
        navigate,
      },
    } = this.props;
    dispatch({
      type: 'SET_USER',
      payload: {
        token,
        username: 'OscarZambrano'
      }
    })
    navigate('Loading');
  }

  render() {
    const {
      container,
      logo,
      input,
      button,
      buttonLabel,
    } = styles;

    return (
      <SafeAreaView style={container}>
        <View>
          <Image
            source={require('../../../assets/logo.png')}
            style={logo}
          />
          <TextInput
            style={input}
            placeholder={'Nombre de usuario'}
            placeholderTextColor={'white'}
          />
          <TextInput
            style={input}
            placeholder={'Contraseña'}
            placeholderTextColor={'white'}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={this.handleLogin}
            style={button}
          >
            <Text style={buttonLabel}>{'Iniciar Sesión'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default connect(null)(Login)
