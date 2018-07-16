import React from 'react';
import { DrawerItems } from 'react-navigation';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

function Drawer(props) {
  const {
    logo,
  } = styles;

  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          source={require('../../../assets/logo.png')}
          style={logo}
        />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10,
  },
});

export default Drawer;
