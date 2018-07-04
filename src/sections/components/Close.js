import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Close({ onPress }) {
  const {
    container,
    button,
  } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={container}
    >
      <Text style={button}>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Close;
