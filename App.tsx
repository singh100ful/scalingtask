/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Layout from 'src/layout/Layout';
import configStore from 'src/store/store';

const {store, persistor} = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={{flex: 1}}>
          <Layout />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
