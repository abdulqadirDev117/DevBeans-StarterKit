import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CheckBox, Text} from '../';
import styles from './boxed-checkbox.style';

const BoxedCheckbox = props => {
  return (
    <View style={props.children ? styles.wrappingContainer : undefined}>
      <View>
        <TouchableOpacity
          onPress={() => props.onToggle && props.onToggle()}
          style={[styles.container, props.containerStyle]}>
          <View style={styles.contentContainer}>
            <CheckBox
              isChecked={props.isChecked}
              onToggle={() => props.onToggle && props.onToggle()}
            />

            <Text
              scale
              style={[
                styles.label,
                props.isChecked ? styles.selectedLabel : undefined,
              ]}>
              {props.label}
            </Text>
          </View>

          {props.children && props.isChecked ? (
            <View style={styles.childrenContainer}>{props.children}</View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {BoxedCheckbox};
