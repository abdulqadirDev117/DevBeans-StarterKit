import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './checkbox.style';

const CheckBox = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onToggle && props.onToggle()}
      style={styles.container}>
      {props.isChecked ? (
        <Icon
          name={'check-square'}
          size={21}
          solid
          color={'#0086E6'}
          style={styles.leftIcon}
        />
      ) : (
        <Icon
          name={'square'}
          size={21}
          color={'#818E9C'}
          style={styles.leftIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export {CheckBox};
