import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function Empty(props) {
  const {
    text,
  } = props;

  const {
    container,
    text: textStyle,
  } = styles;

  return (
    <View style={container}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16
  }
});

export default Empty;
