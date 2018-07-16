import React, { Component } from 'react';
import LoadingLayout from '../../sections/components/Loading';
import { connect } from 'react-redux';

class Loading extends Component {
  componentDidMount() {
    const {
      user,
      navigation: {
        navigate,
      },
    } = this.props;
    if (user) {
      navigate('App');
      return;
    }
    navigate('Login');
  }

  render() {
    return <LoadingLayout />
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Loading);
