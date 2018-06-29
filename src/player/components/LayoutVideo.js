import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function LayoutVideo(props) {
  const {
    video,
    loader,
    loading,
    controls,
  } = props;

  const {
    container,
    video: videoStyle,
    loader: loaderStyle,
  } = styles;

  return (
    <View style={container}>
      <View style={videoStyle}>
        {video}
      </View>
      <View style={loaderStyle}>
        {loading && loader}
      </View>
      {controls}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black'
  },
  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default LayoutVideo;
