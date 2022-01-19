//import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import isLoading from 'is-loading';
import { Providers } from './src/Providers';
//import { Providers } from './src/Providers';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './screens/PhoneLogin'
import AppNavigator from './navigation/AppNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios','android' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/appstore.png'),
      require('./assets/images/appstore.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      //'Roboto-Regular': require('native-base/Fonts/Roboto-Regular.ttf'),
      'Roboto_Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      //'Roboto-medium': require('native-base/Fonts/Roboto-medium.ttf'),
//'MaterialIcons': require('native-base/Fonts/MaterialIcons.ttf'),
      'MaterialIcons': require('./assets/fonts/MaterialIcons.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
  // return <Signup />
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
