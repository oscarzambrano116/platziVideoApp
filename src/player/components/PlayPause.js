import React from 'react';
import Icon from '../../sections/components/Icon';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';

function PlayPause(props) {
  const {
    onPress,
    paused,
  } = props;

  const {
    container,
  } = styles;

  return(
    <TouchableHighlight
      onPress={onPress}
      style={container}
      underlayColor={'transparent'}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
        paused ? (
          <Icon iconName={'play-arrow'} />
        ) : (
          <Icon iconName={'pause'} />
        )
      }
    </TouchableHighlight>
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

export default PlayPause;
