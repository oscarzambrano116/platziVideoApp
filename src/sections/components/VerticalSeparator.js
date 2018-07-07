import React from 'react';
import {
  View,
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
    <View style={[ separator, { borderTopColor: color || '#EAEAEA' } ]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
})

export default VerticalSeparator;
