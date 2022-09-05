import {View} from 'react-native';
import {Header, PrimaryButton, SecondaryButton} from '@components'; //absolute paths // aliases
import {AppTheme} from '@themes';
import React from 'react';
import styles from './AppStartScreen.style';

const AppStartScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header title="App Configured" /> */}
      <View style={styles.btn_container}>
        <PrimaryButton
          loading={false}
          title={'Login'}
          disabled={true}
          small={false}
        />
        <View style={styles.spaceV}></View>
        <SecondaryButton
          loading={false}
          title={'Explores'}
          disabled={false}
          small={false}
        />
      </View>
    </View>
  );
};

export {AppStartScreen};
