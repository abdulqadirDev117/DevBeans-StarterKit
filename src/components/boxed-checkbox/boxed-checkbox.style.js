import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrappingContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    width: screenWidth / 4 - 14,
    height: screenWidth / 4 - 20,
    borderColor: '#E6ECF2',
    borderWidth: 1,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#7E8E9D',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedLabel: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
  },
  childrenContainer: {
    padding: 10,
  },
});

export default styles;
