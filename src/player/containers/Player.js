import React, { Component } from 'react';
import Video from 'react-native-video';
import LayoutVideo from '../components/LayoutVideo';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import FullScreen from '../components/FullScreen';
import ProgressBar from '../components/ProgressBar';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullscreen: false,
    duration: 0.00,
    currentTime: '0.00',
    progress: 0,
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

  onLoad = (payload) => {
    const duration = payload.duration / 60;
    const mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    const totalTime = (mins + seconds * 10).toFixed(2);
    this.setState({
      loading: false,
      duration: totalTime
    });
  }

  playPause = () => {
    const { paused } = this.state;
    this.setState({
      paused: !paused,
    })
  }

  playerFullscreen = () => {
    const { fullscreen } = this.state;
    !fullscreen ? this.player.presentFullscreenPlayer() : this.player.dismissFullscreenPlayer();
    this.setState({
      fullscreen: !fullscreen,
    });
  }

  handleFullscreenPlayerWillDismiss = () => {
    this.setState({
      fullscreen: false,
    })
  }

  setPlayerRef = (ref) => {
    this.player = ref;
  }

  handleProgress = (payload) => {
    const duration = payload.currentTime / 60;
    const mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    const currentTime = (mins + seconds * 10).toFixed(2);
    this.setState({
      currentTime: currentTime,
      progress: (payload.currentTime / payload.seekableDuration )
    })
  }

  render() {
    const {
      video: videoStyle,
      duration: durationStyle,
    } = styles;

    const {
      loading,
      paused,
      fullscreen,
      progress,
      currentTime,
      duration,
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
            ref={this.setPlayerRef}
            onFullscreenPlayerWillDismiss={this.handleFullscreenPlayerWillDismiss}
            onProgress={this.handleProgress}
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
            <ProgressBar progress={progress} />
            <Text style={durationStyle}>{currentTime} / {duration}</Text>
            <FullScreen
              onPress={this.playerFullscreen}
              fullscreen={fullscreen}
            />
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
  duration: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Player;
