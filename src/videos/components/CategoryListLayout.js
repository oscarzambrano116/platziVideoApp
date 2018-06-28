import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

function CategoryListLayout(props) {
  const {
    title,
    children,
  } = props;

  const {
    container,
    title: titleStyle,
  } = styles;

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={container}
    >
      <Text style={titleStyle}>{title}</Text>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4C4C4C',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default CategoryListLayout;
