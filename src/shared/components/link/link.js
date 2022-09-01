import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../';
import styles from './link.style';

const Link = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
      style={props.containerStyle}>
      <Text
        style={[
          styles.link,
          props.primary ? styles.primary : undefined,
          props.destructive ? styles.destructive : undefined,
          props.style,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export {Link};
