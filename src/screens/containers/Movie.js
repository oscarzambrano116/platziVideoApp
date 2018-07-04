import React, { Component } from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';
import { connect } from 'react-redux';

class Movie extends Component {
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
    const { movie } = this.props
    return (
      <MovieLayout>
        <Header>
          <Close
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
        <Details {...movie} />
      </MovieLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(Movie);
