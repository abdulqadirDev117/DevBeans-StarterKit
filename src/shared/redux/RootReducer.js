import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {encryptTransform} from 'redux-persist-transform-encrypt';
// import Config from 'react-native-config';

// import UserDetailReducer from './slices/userSlice';
// import RouteReducer from './slices/routeSlice';
import {reverseString} from '@utils';

const reduxEncryptor = encryptTransform({
  // secretKey: reverseString(Config.ENC_SECRET),
  secretKey: reverseString('ENC_SECRET'),
  onError: function (error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['user_details', 'user_booking', 'nav_route', 'location_data'],
  // blacklist: ['util'],
  transforms: [reduxEncryptor],
};

const rootReducer = combineReducers({
  //   user_details: UserDetailReducer,
  //   user_booking: BookingDetailReducer,
  //   nav_route: RouteReducer,
  //   location_data: LocationDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
