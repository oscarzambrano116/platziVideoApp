import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';
import { connect } from 'react-redux';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
      },
    ).start();
  }

  closeVideo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    })
  }

  render() {
    const {
      props: {
        movie,
      },
      state: {
        opacity
      },
    } = this;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity,
        }}
      >
        <MovieLayout>
          <Header>
            <Close
              onPress={this.closeVideo}
            />
          </Header>
          <Player />
          <Details {...movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(Movie);
