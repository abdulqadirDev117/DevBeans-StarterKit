import React from 'react';
import {Text, View} from 'react-native';
import {AppStartScreen} from '@screens';

const RootNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <AppStartScreen />
    </View>
  );
};

export default RootNavigation;
