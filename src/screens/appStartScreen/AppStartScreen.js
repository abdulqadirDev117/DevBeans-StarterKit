import {ScrollView, View} from 'react-native';
import {Header, PrimaryButton, SecondaryButton} from '@components'; //absolute paths // aliases
import {AppTheme, Images, WP, HP} from '@themes';
import React from 'react';
import styles from './AppStartScreen.style';
import FastImage from 'react-native-fast-image';

const AppStartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Header title="App Configured" /> */}
      <View style={{flex: 0.8, justifyContent: 'space-between'}}>
        <FastImage
          style={styles.logo}
          // tintColor={Colors.secondaryBackground}
          source={Images.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
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
      <View style={{flex: 0.2}}>
        <FastImage
          style={styles.bottomImage}
          // tintColor={Colors.secondaryBackground}
          source={Images.wall_bottom}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>
    </ScrollView>
  );
};

export {AppStartScreen};
