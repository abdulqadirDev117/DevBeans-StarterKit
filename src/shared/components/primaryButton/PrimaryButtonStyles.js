import {StyleSheet, Dimensions, Platform} from 'react-native';
import {AppTheme} from '@themes';
import {GLOBAL_STYLE} from '@themes';
// import {HP, WP} from '@themes';

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLE.CENTER_ROW,
    width: AppTheme.METRICES.ROOT_WIDTH,
    height: AppTheme.METRICES.BUTTON_HEIGHT,
    alignSelf: 'center',
    borderRadius: AppTheme.RADIUS.BOX,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.65,
    elevation: 5,
  },
  smallContainer: {
    ...GLOBAL_STYLE.CENTER,
    width: '60%',
    height: AppTheme.METRICES.SMALL_BUTTON_HEIGHT,
    alignSelf: 'center',
    borderRadius: AppTheme.RADIUS.BOX,
    marginBottom: AppTheme.MARGIN.NORMAL,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  // icon: {
  //   fontSize: 20,
  //   color: AppTheme.COLORS.white,
  //   marginRight: AppTheme.MARGIN.LOW,
  // },
  buttonText: {
    fontFamily: AppTheme.FONTS.TYPE.MEDIUM,
    fontSize: AppTheme.FONTS.SIZE.MEDIUM,
    fontWeight: 'bold',
    color: AppTheme.COLORS.white,
  },
});

export default styles;
