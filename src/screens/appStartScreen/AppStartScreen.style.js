import {StyleSheet, Dimensions, Platform} from 'react-native';
import {AppTheme} from '@themes';
import {GLOBAL_STYLE, WP} from '@themes';
import {HP} from '../../shared/theme';
// import { WP } from '../../shared/theme';
// import {HP, WP} from '@themes';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppTheme.COLORS.primaryBlueBg},
  btn_container: {
    flex: 0.3,
    // ...GLOBAL_STYLE.CENTER,
    // backgroundColor: 'red',
    // height: HP(100) - WP(50),
    paddingVertical: WP(5),
    // alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  spaceV: {
    height: HP(5),
  },
});

export default styles;
