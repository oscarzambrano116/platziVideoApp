import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

function Suggestion(props) {
  const {
    container,
    left,
    right,
    cover,
    title,
    year,
    rating,
    genreContainer,
    genreText,
  } = styles;

  return (
    <View style={container}>
      <View style={left}>
        <Image
          style={cover}
          source={require('../../../assets/logo.png')}
        />
        <View style={genreContainer}>
          <Text style={genreText}>{'Acción'}</Text>
        </View>
      </View>
      <View style={right}>
        <Text style={title}>{'Avengers'}</Text>
        <Text style={year}>{'2007'}</Text>
        <Text style={rating}>{'5 Estrellas'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genreContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546B',
  },
  year: {
    backgroundColor: '#70B124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6B6B6B',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default Suggestion;
