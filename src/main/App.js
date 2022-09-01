import React from 'react';
import RootContainer from './RootContainer';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from 'shared/store';

const App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <RootContainer />
    // </PersistGate>
    // </Provider>
  );
};

export default App;

// import {View} from 'react-native';
// import {Text, Header, PrimaryView} from '@components';
// import React from 'react';

// const App = () => {
//   return (
//     <PrimaryView style={{flex: 1}}>
//       <Header title="App Configured" />
//       <Text style={{fontWeight: '800'}}>App</Text>
//     </PrimaryView>
//   );
// };

// export default App;
//
