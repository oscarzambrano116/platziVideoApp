import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

function Loading(props) {
  const {
    container,
    logo,
  } = styles;

  return (
    <View style={container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={logo}
      />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  }
});

export default Loading;
