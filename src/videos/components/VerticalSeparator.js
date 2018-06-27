import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function VerticalSeparator(props) {
  const {
    color,
  } = props;

  const {
    separator,
  } = styles;

  return (
    <View style={[ separator, { borderTopColor: color || '#EAEAEA' } ]}>
      <Text>
        {'Esto es un separador'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
})

export default VerticalSeparator;
