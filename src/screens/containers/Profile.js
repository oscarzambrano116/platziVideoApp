import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  static navigationOptions = () => {
    return {
      title: 'Perfil',
      tabBarIcon: <Text>{'😎'}</Text>,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focus = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    });
  }

  componentWillUnmount() {
    this.focus.remove();
  }

  handleLogout = () => {
    const {
      dispatch,
      navigation,
    } = this.props;

    dispatch({
      type: 'REMOVE_USER',
    })
    navigation.navigate('Loading');
  }
  render() {
    const {
      user,
    } = this.props;

    const {
      container,
    } = styles;

    return (
      <SafeAreaView style={container}>
        <Text>{(user && user.username) || 'Username'}</Text>
        <Button
          title={'Cerrar sesión'}
          color={'#67A52E'}
          onPress={this.handleLogout}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
