import {StyleSheet} from 'react-native';
import {THEME} from '.';

const GLOBAL_STYLE = StyleSheet.create({
  CENTER: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  MAIN: {
    flex: 1,
    backgroundColor: THEME.COLORS.primaryBackground,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  ROW: {
    flexDirection: 'row',
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
