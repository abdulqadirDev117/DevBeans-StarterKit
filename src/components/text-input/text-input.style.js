import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '@config';

const {width: screenWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {},
  errorContainer: {
    borderColor: COLOR.TEXT_INPUT_ERROR,
  },
  label: {
    fontSize: 14,
    // fontWeight: '700',
    color: COLOR.TEXT_INPUT_LABEL,
    // marginBottom: 10,
  },
  inputContainer: {
    height: 42,
    width: screenWidth - 100,
    backgroundColor: COLOR.TEXT_INPUT_BACKGROUND,
    borderRadius: 8,
    borderBottomWidth: 0.9,
    borderColor: '#FFF5EE',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  applyInputContainer: {
    height: 242,
    width: screenWidth - 100,
    backgroundColor: COLOR.TEXT_INPUT_BACKGROUND,
    borderRadius: 8,
    borderBottomWidth: 0.9,
    borderColor: '#FFF5EE',
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  input: {
    fontSize: 14,
    // fontFamily: 'Roboto',
    color: COLOR.TEXT_INPUT_VALUE,
    flex: 1,
    marginLeft: 15,
  },
  applyInput: {
    fontSize: 14,
    // fontFamily: 'Roboto',
    color: COLOR.TEXT_INPUT_VALUE,
    flex: 1,
    marginLeft: 15,
  },
  errorMessage: {
    color: COLOR.TEXT_INPUT_ERROR,
    fontSize: 12,
  },
  errorMessageContainer: {
    height: 15,
    justifyContent: 'center',
  },
  leftIcon: {
    // paddingLeft: 5,
    // marginLeft: 5,
  },
});

export default styles;
