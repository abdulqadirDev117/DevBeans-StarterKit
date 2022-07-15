import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '@config';
import {Text} from '../';
import styles from './button.style';

const Button = props => {
  function getIconColor() {
    if (props.invertedPrimary) {
      return COLOR.BUTTON_PRIMARY_BACKGROUND;
    }

    if (props.primaryHollow) {
      return COLOR.BUTTON_HOLLOW_PRIMARY_ICON;
    }

    if (props.primary) {
      return COLOR.BUTTON_PRIMARY_ICON;
    }

    if (props.googleLogin) {
      return COLOR.BUTTON_GOOGLE_LOGIN_ICON;
    }
  }
  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      onPress={props.onPress}
      style={[
        styles.container,
        props.invertedPrimary ? styles.invertedPrimaryContainer : undefined,
        props.primary ? styles.primaryContainer : undefined,
        props.success ? styles.successContainer : undefined,
        props.warning ? styles.warningContainer : undefined,
        props.error ? styles.errorContainer : undefined,
        props.primaryHollow ? styles.primaryHollowContainer : undefined,
        props.secondaryHollow ? styles.secondaryHollowContainer : undefined,
        props.googleLogin ? styles.googleLoginContainer : undefined,
        props.containerStyle,
      ]}>
      {props.loading ? (
        <ActivityIndicator color={getIconColor()} />
      ) : (
        <View style={styles.contentContainer}>
          {props.icon ? (
            <View style={styles.iconContainer}>{props.icon}</View>
          ) : null}

          {props.iconName ? (
            <View style={styles.iconContainer}>
              <Icon name={props.iconName} color={getIconColor()} />
            </View>
          ) : null}

          <Text
            style={[
              styles.title,
              props.invertedPrimary ? styles.invertedPrimaryText : undefined,
              props.primary ? styles.primaryTitle : undefined,
              props.success ? styles.successTitle : undefined,
              props.warning ? styles.warningTitle : undefined,
              props.error ? styles.errorTitle : undefined,
              props.primaryHollow ? styles.primaryHollowTitle : undefined,
              props.secondaryHollow ? styles.secondaryHollowTitle : undefined,
              props.googleLogin ? styles.googleLoginTitle : undefined,
            ]}>
            {props.title}
          </Text>

          {props.badgeText ? (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{props.badgeText}</Text>
            </View>
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  );
};
export {Button};
