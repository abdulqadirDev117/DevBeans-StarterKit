import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

const styles = StyleSheet.create({
  container: {
    borderColor: '#05386b',
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 15,
    color: 'white',
  },
  textInput: {
    flex: 1,
    color: 'white',
    // backgroundColor: 'green',
  },
  clearButtonIcon: {},
  clearButtonContainer: {
    // paddingLeft: 10,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

export default styles;
