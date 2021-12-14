import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//mport activeDirectory2 from "activedirectory2";

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
    

const config = {
  url: "ldaps://ldap.brighton.ac.uk:636",
  baseDN: "Ou=People,dc=brighton,dc=ac,dc=uk",
  username: "Uid={$username},ou=People,dc=brighton,dc=ac,dc=uk",
  password: "ldap_bind($ldapconn, $pdn, $password); //firewall??"
};
alert (JSON.stringify(location));
WebBrowser.openBrowserAsync({LocationLog});
var ad = new activeDirectory(config);

//console.log(ad);

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
        //<View style={{ flex: 1, marginTop: 0 }}></View>
        <View>
<TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 90, height: 110, }} />   

</TouchableOpacity>
</View>
//</View>

    );
}
}
