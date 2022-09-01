import {View} from 'react-native';
import {Text, Header, PrimaryView} from '@components';
import {AppTheme} from '@themes';
import React from 'react';

const AppStartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: AppTheme.COLORS.primaryBlueBg}}>
      {/* <Header title="App Configured" /> */}
      <View>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
        <Text style={{fontWeight: '800'}}>App Start Screen</Text>
      </View>
    </View>
  );
};

export {AppStartScreen};
