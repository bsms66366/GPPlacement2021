import React, { Component } from 'react';
import { useSubscription } from "use-subscription";
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationLog from '../screens/LocationLog';


export default class App extends Component {
  
  scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied'
      );
    }

    let location = await Location.getCurrentPositionAsync({});
alert (JSON.stringify(location));
//WebBrowser.openBrowserAsync({LocationLog});
//WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');
let user = await authenticate(options)
  console.log(user)

  // auth with regular user
  options = {
    ldapOpts: {
      url: 'ldaps://ldap.brighton.ac.uk:636',
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: 'Uid={$username},ou=People,dc=brighton,dc=ac,dc=uk',
    userPassword: ({attribute}={password}),
    userSearchBase: 'Ou=People,dc=brighton,dc=ac,dc=uk',
    usernameAttribute: 'uid',
    username: ({attribute}={username}),
    // starttls: false
  }

  //user = await authenticate(options)
  //console.log(user)
//}
} else {
  this.setState({
    failedCount: this.state.failedCount + 1,
  });
}
} catch (e) {
console.log(e);
}
};
render() {
  return (
        <View style={{ flex: 1, marginTop: 0 }}></View>
        <View>
<TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 90, height: 110, }} />   

</TouchableOpacity>
</View>

    );
}
    
}