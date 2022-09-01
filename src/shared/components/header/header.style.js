import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5c5554',
    // paddingBottom: 10,
  },
  topSpace: {
    height: 37,
  },
  shadow: {
    elevation: 5,
    shadowOpacity: 0.1,
    shadowOffset: {height: 4},
    zIndex: 10,
  },
  leftIconView: {
    borderRadius: 40,
    borderWidth: 1,
    paddingLeft: 1,
    width: 35,
    height: 35,
    backgroundColor: '#4c4d4f',
    borderColor: 'transparent',
  },
  leftIcon: {
    // marginLeft: 16,
    padding: 7,
    color: 'white',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '800',
    // marginTop: 15,
    color: 'white',
    // marginLeft: 16,
  },
  searchBarContainer: {
    padding: 16,
    paddingBottom: 15,
    fontSize: 14,
    fontFamily: 'Lato',
    flexDirection: 'row',
    backgroundColor: '#1c5fa3',
  },
  searchBarRightButtons: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 28,
    backgroundColor: '#05386b',
  },
  smallTitle: {
    color: '#373737',
    fontSize: 18,
    fontFamily: 'Lato',
    fontWeight: '700',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsSpace: {
    flex: 1,
  },
  rightButtonContainer: {
    marginRight: 16,
  },
});

export default styles;
