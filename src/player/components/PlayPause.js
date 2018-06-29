import React from 'react';
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
    button,
  } = styles;

  return(
    <TouchableHighlight
      onPress={onPress}
      style={container}
      underlayColor={'red'}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
        paused ? (
          <Text style={button}>{'Play'}</Text>
        ) : (
          <Text style={button}>{'Pause'}</Text>
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default PlayPause;
