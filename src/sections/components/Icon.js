import React from 'react';
import {
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

function Icon(props) {
  const {
    iconName,
    size,
    color,
  } = props;

  return (
    <View>
      <Icons
        name={iconName}
        size={size}
        color={color}
      />
    </View>
  )
}

Icon.defaultProps = {
  size: 20,
  color: 'white',
}

export default Icon;
