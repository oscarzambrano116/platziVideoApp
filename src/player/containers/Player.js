import React, { Component } from 'react';
import Video from 'react-native-video';
import LayoutVideo from '../components/LayoutVideo';
import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

class Player extends Component {
  state = {
    loading: true,
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    });
  }

  onLoad = () => {
    this.setState({
      loading: false,
    })
  }

  render() {
    const {
      video: videoStyle,
    } = styles;

    const {
      loading,
    } = this.state;

    return (
      <LayoutVideo
        video={
          <Video
            style={videoStyle}
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
            resizeMode={'contain'}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
          />
        }
        loader={
          <ActivityIndicator color='red' />
        }
        loading={loading}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
