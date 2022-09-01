import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    fontWeight: '700',
  },
  primary: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.LINK_PRIMARY,
  },
  destructive: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.LINK_DESTRUCTIVE,
  },
});

export default styles;
