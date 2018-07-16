import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Suggestion(props) {
  const {
    container,
    left,
    right,
    cover,
    title: titleStyle,
    year: yearStyle,
    rating: ratingStyle,
    genreContainer,
    genreText,
  } = styles;

  const {
    title,
    medium_cover_image,
    year,
    rating,
    genres,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={left}>
          <Image
            style={cover}
            source={{
              uri: medium_cover_image
            }}
          />
          <View style={genreContainer}>
            <Text style={genreText}>{genres ? genres[0] : 'Category'}</Text>
          </View>
        </View>
        <View style={right}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={yearStyle}>{year}</Text>
          <Text style={ratingStyle}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
