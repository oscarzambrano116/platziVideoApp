import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function SuggestionListLayout(props) {
  const {
    title,
    children,
  } = props;

  const {
    container,
    title: titleStyle,
  } = styles;

  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#4C4C4C',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});

export default SuggestionListLayout;
