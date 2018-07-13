import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';

class About extends Component {
  static navigationOptions = () => {
    return {
      title: 'Sobre esta app',
      tabBarIcon: <Text>{'🤓'}</Text>,
      drawerIcon: <Text>{'🤓'}</Text>,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focus = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#022C43');
    });
  }

  componentWillUnmount() {
    this.focus.remove();
  }

  render() {
    const {
      container,
      logo,
      text,
    } = styles;

    return (
      <View style={container}>
        <Image
          source={{ uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png' }}
          style={logo}
        />
        <Text style={text}>Platzi Video es construido como una aplicación educativa para enseñar React Native y React Navigation</Text>
        <Text style={text}>@oscarzz116</Text>
        <Text style={text}>2019</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
})

export default About
