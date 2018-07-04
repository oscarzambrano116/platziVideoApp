import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

function ControlLayout(props) {
  const {
    children,
  } = props;

  const {
    container,
  } = styles;

  return (
    <View style={container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ControlLayout;
