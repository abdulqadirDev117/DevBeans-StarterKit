import _ from 'lodash';

// use post script names for font families

const Montserrat = {
  500: {fontFamily: 'Montserrat-Regular'},
  600: {fontFamily: 'Montserrat-Medium'},
  700: {fontFamily: 'Montserrat-SemiBold'},
  800: {fontFamily: 'Montserrat-Bold'},
};

const FONTS = {
  Montserrat,
};

/*
  Helper class for cross-platform font styles
*/
class FontHelper {
  static font(fontParams) {
    let {fontFamily, fontWeight, fontStyle} = fontParams;
    fontFamily = fontFamily || 'Montserrat';
    fontWeight = fontWeight || '400';
    fontStyle = fontStyle || '';

    const styles = {
      ..._.omit(fontParams, ['fontFamily', 'fontWeight', 'fontStyle']),
      ...FONTS[fontFamily][fontWeight + fontStyle],
    };

    return styles;
  }
}

export {FontHelper};
