import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  const {
    children,
  } = props;

  const {
    logo,
    container,
    right,
  } = styles;

  return (
    <View>
      <SafeAreaView>
        <View style={container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={logo}
          />
          <View style={right}>
            {children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default Header
