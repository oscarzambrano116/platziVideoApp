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
          <View>
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
    justifyContent: 'space-between',
  },
});

export default Header
