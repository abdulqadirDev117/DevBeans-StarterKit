import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import ScaleSheet from 'react-native-scalesheet';
import {FontHelper} from '@utils';
import {AppTheme} from '@themes';
import _ from 'lodash';

const AppText = props => {
  const {children, style, ...rest} = props;

  return (
    <Text
      children={children}
      style={[
        {
          color: props?.primary
            ? AppTheme.COLORS.primaryBackground
            : AppTheme.COLORS.greyLight,
          fontFamily: AppTheme.FONTS.TYPE.MEDIUM,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export {AppText};
