//import React from 'react';
import React, { Component } from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import LocationLog from '../screens/LocationLog';
//import ResourcesScreen from '../screens/ResourcesScreen';

export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  
  SafeAreaView.setStatusBarHeight(0);

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
    //alert (JSON.stringify(location));
        WebBrowser.openBrowserAsync('http://192.168.1.59:8000/api/Student'),alert('Now login to your Eportfolio!');
      } else {
        this.setState({
          failedCount: this.state.failedCount + 1,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
        
      <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
        <Text accessible={true} accessibilityLabel="bsms digital attendance" style={styles.titleText} style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>BSMS DIGITAL PLACEMENT</Text>
        <Text accessible={true} accessibilityLabel="and skills record" style={styles.titleText} style={{ color: 'white', fontSize: 20, marginTop: 1, textAlign:"center"}}>CLINICAL SKILLS RECORD</Text> 
        <View style={styles.container1}>
   <TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 300, height: 150, marginTop: 5}} />   
</TouchableOpacity>
        {/* <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/ClinicalSkillsLogo4-04.png')} style={{width: 175, height: 150, marginLeft: 16, marginTop:0}} /> */}
        <View style= {styles.container}>
     
       {/*  <View style={styles.container1}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://forms.office.com/r/sfy50Zui9m') }>
          <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/skillsIcon6.png')} style={{width: 175, height: 75, marginTop:20}} />
          </TouchableOpacity>
        </View> */}
        <View style= {styles.container2}>
        <Image accessible={true} accessibilityLabel="bsmslogo" source={require('../assets/images/BSMS_logo_WO.png')} style={{width: 275, height: 55, marginTop: 5}} />
        </View>
  
  </View>

        </View>
       </View>
       </View>
       </View>
      
   
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 10,
  paddingLeft: 20,
  justifyContent: 'center',
  alignItems: 'center',
},

/* IconStyle:{
    width: wp('13%'), 
    height:hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
},
 */
/* BoxBorder: (height, width) => ({
    marginTop: 25,
    width: (width /3)-10, 
    height: '40%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }), */

v_container: {
    flex: 1,
    width: wp('100%'),
    //paddingTop: 30,
    //backgroundColor: '#282828',
  },

  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFPercentage(2),
   // fontWeight: 'bold',
    color:'#bcba40',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    //justifyContent: 'center', 
    //alignSelf: 'center'
    backgroundColor: '#005E7E',
    alignItems:'center',
  },
  container1: {
    flex: 1,
    //paddingTop: 30,
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
  },
});