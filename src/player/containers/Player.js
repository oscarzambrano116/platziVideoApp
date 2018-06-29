import React, { Component } from 'react';
import Video from 'react-native-video';
import LayoutVideo from '../components/LayoutVideo';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    });
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  onLoad = () => {
    this.setState({
      loading: false,
    })
  }

  playPause = () => {
    const { paused } = this.state;
    this.setState({
      paused: !paused,
    })
  }

  render() {
    const {
      video: videoStyle,
    } = styles;

    const {
      loading,
      paused,
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
            paused={paused}
          />
        }
        loader={
          <ActivityIndicator color='red' />
        }
        loading={loading}
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={paused}
            />
            <Text>{'ProgressBar |'}</Text>
            <Text>{'time left |'}</Text>
            <Text>{'fullscreen |'}</Text>
          </ControlLayout>
        }
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
