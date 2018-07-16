import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/Search';

class Lucky extends Component {
  static navigationOptions = () => {
    return {
      title: 'Voy a tener suerte',
      tabBarIcon: <Text>{'⭐️'}</Text>,
      drawerIcon: <Text>{'⭐️'}</Text>,
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

  render() {
    const {
      container,
    } = styles;

    return (
      <View style={container}>
        <Text>🍀</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky
