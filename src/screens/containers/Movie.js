import React, { Component } from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Player />
      </MovieLayout>
    );
  }
}

export default Movie;
