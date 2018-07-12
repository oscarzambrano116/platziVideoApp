import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Category(props) {
  const {
    wrapper,
    genre,
  } = styles;

  const {
    background_image,
    genres,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={wrapper}
        source={{
          uri: background_image,
        }}
      >
        <Text style={genre}>{genres ? genres[0] : 'No genre'}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  }
})

export default Category;
