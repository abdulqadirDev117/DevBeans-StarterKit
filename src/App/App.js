import {View} from 'react-native';
import {Text, Header} from '@components';
import React from 'react';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="App Configured" />
      {/* <Text style={{fontWeight: '800'}}>App</Text> */}
    </View>
  );
};

export default App;
