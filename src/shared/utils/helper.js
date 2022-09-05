import {Alert, Platform} from 'react-native';
// import Toast from 'react-native-simple-toast';

// export const AppShowToast = msg => {
//   Toast.show(msg);
// };

export const reverseString = str => {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
