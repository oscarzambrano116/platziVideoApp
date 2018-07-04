import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

function Details (props) {
  const {
    title,
    description_full,
    medium_cover_image,
  } = props;

  const {
    top,
    title: titleStyle,
    cover,
    bottom,
    details,
    description,
  } = styles;

  return (
    <View>
      <View style={top}>
        <Text style={titleStyle}>{title}</Text>
      </View>
      <View style={bottom}>
        <View style={details}>
          <Image
            source={{ uri: medium_cover_image }}
            style={cover}
          />
          <Text style={description}>{description_full}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  }
});

export default Details;
