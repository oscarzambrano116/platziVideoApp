import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from '../../sections/components/Icon';

function FullScreen(props) {
  const {
    fullscreen,
    onPress,
  } = props;

  const {
    container
  } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
        fullscreen ? (
          <Icon iconName={'fullscreen-exit'} />
        ) : (
          <Icon iconName={'fullscreen'} />
        )
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
  },
});

export default FullScreen;
