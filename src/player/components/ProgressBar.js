import React from 'react';
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  StyleSheet,
} from 'react-native';

function ProgressBar({ progress }) {
  const {
    progressBar,
  } = styles;

  const iosProgressBar = (
    <ProgressViewIOS
      style={progressBar}
      progressTintColor={'white'}
      trackTintColor={'light-gray'}
      progress={progress}
    />
  );

  const androidProgressBar = (
    <ProgressBarAndroid
      style={progressBar}
      color={'white'}
      styleAttr={'Horizontal'}
      indeterminate={false}
      progress={progress}
    />
  );

  return (
    Platform.select({
      ios:  iosProgressBar,
      android: androidProgressBar,
    })
  );
}

const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    marginRight: 20,
  }
});

export default ProgressBar;
