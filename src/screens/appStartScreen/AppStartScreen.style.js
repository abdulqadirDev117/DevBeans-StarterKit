import {StyleSheet, Dimensions, Platform} from 'react-native';
import {AppTheme} from '@themes';
import {GLOBAL_STYLE, WP} from '@themes';
import {HP} from '../../shared/theme';
// import { WP } from '../../shared/theme';
// import {HP, WP} from '@themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.COLORS.primaryBlueBg,
    flexDirection: 'column',
  },
  btn_container: {
    flex: 0.3,
    // ...GLOBAL_STYLE.CENTER,
    // backgroundColor: 'red',
    // height: HP(100) - WP(50),
    paddingVertical: HP(3),
    // alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  spaceV: {
    height: HP(4) - WP(1),
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: HP(20) - WP(10),
  },
  bottomImage: {
    // flexDirection: 'row',
    // flex: 0.8,
    aspectRatio: 2.5 / 2,
    width: Dimensions.get('screen').width + WP(20),
    height: HP(40),
    bottom: WP(-25),
    left: -20,
  },
});

export default styles;
