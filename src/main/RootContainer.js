import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from '../routes';

const RootContainer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default RootContainer;
