import {Alert} from 'react-native';

export class Notification {
  static error(title = '', message, config) {
    Alert.alert(title, message, [{text: 'OK', onPress: () => {}}]);
  }
}
