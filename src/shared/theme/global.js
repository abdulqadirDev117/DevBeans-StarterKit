import {StyleSheet} from 'react-native';
// import {AppTheme} from './index';

const GLOBAL_STYLE = StyleSheet.create({
  CENTER: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ROW: {
    flexDirection: 'row',
  },
  CENTER_ROW: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MAIN: {
    flex: 1,
    // backgroundColor: AppTheme.COLORS.primaryBackground,
    // paddingHorizontal: THEME.PADDING.LOW,
  },
  ROW_BTW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FLEX_1: {
    flex: 1,
  },
});

export default GLOBAL_STYLE;
