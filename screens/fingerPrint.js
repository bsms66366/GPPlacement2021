import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


/* import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator,
  } from 'rn-viewpager';
  //import PagerTabIndicator , IndicatorViewPager , PagerTitleIndicator , PagerDotIndicator */
  
  
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
          WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');
        } else {
          this.setState({
            failedCount: this.state.failedCount + 1,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };