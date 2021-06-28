import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { Dimensions } from "react-native";
import React, { Component, Props } from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';
//import SvgUri from "expo-svg-uri";
import * as Svg from 'react-native-svg';
//import {ReactComponent as SvgSvgDoc3} from './components/SvgSvgDoc3.svg';
//import { SvgXml } from 'react-native-svg';
//import SvgSvgDoc3 from './assets/images/SvgSvgDoc3.svg';
//import svgComponent from "./svgComponent";
//import Svg, { Circle, Rect } from 'react-native-svg';
//import { SvgSvgDoc } from "../components/svgDoc.jsx";

//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import InfoScreen from '../screens/InfoScreen';
//import Video360Screen from '../screens/Video360Screen';


var {height, width} = Dimensions.get('window');
  console.log (height, width)


// import all basic components
//console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "react-native-best-viewpager";
 



export default class ViewPagerPage extends Component {
state = {
    location: null,
    errorMessage: null,
  };
//fingerprint location scan
scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied'
      );
    }


  //let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    let location = await Location.getCurrentPositionAsync({});
    //let location = await Location.reverseGeocodeAsync({});
   
    const { latitude , longitude } = location.coords
    this.setState({ location: {latitude, longitude}});



    //text = JSON.stringify(this.state.location);
    alert (JSON.stringify(location));
    WebBrowser.openBrowserAsync('https://forms.office.com/Pages/ResponsePage.aspx?id=kLsAqf6UWEaLNN1yCExQZE0a1JJNckhFhxzoDgNM5WhUMzNNRzZNNEs5VjJNQlYzR1hBMzVJT0hENC4u');
      } else {
        this.setState({
          failedCount: this.state.failedCount + 1,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }; 
  /*let location = await Location.getCurrentPositionAsync({});
  this.setState({ location });
  };*/ 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ height: 1 }}
          indicator={this._renderDotIndicator()}>
        </IndicatorViewPager>

       
 
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 1, backgroundColor: "#282828" }}
          indicator={this._renderDotIndicator()}>
        <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
        <Text accessible={true} accessibilityLabel="bsms digital attendance" style={styles.titleText} style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>BSMS DIGITAL PLACEMENT</Text>
        <Text accessible={true} accessibilityLabel="and skills record" style={styles.titleText} style={{ color: 'white', fontSize: 20, marginTop: 1, textAlign:"center"}}>CLINICAL SKILLS RECORD</Text>
        <View style={styles.container}>
        <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/ClinicalSkillsLogo4-01.png')} style={{width: 250, height: 300, marginTop:60}} />
     
{/*<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 47 57.8" style="enable-background:new 0 0 47 57.8;" xml:space="preserve">
<style type="text/css">
  .st0{display:none;}
  .st1{display:inline;fill:#F6F6F6;stroke:#FAD607;stroke-miterlimit:10;}
  .st2{fill:none;stroke:#FAD607;stroke-width:0.7856;stroke-miterlimit:10;}
  .st3{fill:none;stroke:#FAD607;stroke-width:0.785;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st4{fill:#F6F6F6;stroke:#FAD607;stroke-miterlimit:10;}
  .st5{fill:none;stroke:#FAD607;stroke-width:1.081;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st6{display:inline;fill:#F6F6F6;stroke:#FAD607;stroke-width:0.129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st7{fill:none;stroke:#FAD607;stroke-width:1.219;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
<g id="Layer_1_1_">
  <g class="st0">
    <path class="st1" d="M24.4,41.7l1.2-4.5h-5l1.3,4.5H24.4z M21.7,43l-0.4,12.9h3.6L24.6,43H21.7z"/>
  </g>
  <path class="st2" d="M8.7,54.9h29.9v-14c-0.9-0.8-2-1.5-3.2-2.3c-2.3-1.4-4.5-2.3-6.3-2.8c-0.4,0.4-2.5,2.1-5.6,1.9
    c-2.8-0.2-4.5-1.8-5-2.2c-1-0.2-9.8,4.2-9.7,5.1C8.8,45.4,8.7,50.1,8.7,54.9z"/>
  <path class="st3" d="M18.6,36.2c0,0,2.4,18.6,2.6,18.6s4.6-0.1,4.6-0.1l4-18.7c-0.6,0.4-2.9,2.2-6.1,2.1
    C20.9,38,19.2,36.7,18.6,36.2z"/>
  <path class="st4" d="M32.4,46.2h-0.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h0.3c0.6,0,1,0.4,1,1C33.5,45.7,33.1,46.2,32.4,46.2z"/>
  <path class="st2" d="M32.3,44.4c-0.3-5.2-2.9-8.3-2.9-8.3 M18.2,36.1c0,0-1.4,0.4-3.2,5.2"/>
  <path class="st2" d="M13.2,50.4c0,0-0.2,0-0.3-0.2c-0.1-0.1-0.1-0.3-0.1-0.3c0-2.3,0.1-4.6,0.1-6.9c0.1-0.2,0.3-0.6,0.7-0.9
    c0.2-0.3,0.6-0.6,0.9-0.7c0.8-0.3,1.4-0.1,1.7,0c0.9,0.3,1.2,1.1,1.3,1.3c0.3,2.1,0.7,4.1,0.9,6.2c-0.1,0.2-0.2,0.6-0.2,0.8"/>
  <circle class="st4" cx="18" cy="50.4" r="1"/>
  <circle class="st4" cx="13.9" cy="50.9" r="1"/>
  <path class="st5" d="M18.4,13.7c2.2,1.7,3.6,1.7,4.5,1.3c1.3-0.4,1.8-1.9,3.5-2.2c0.8-0.1,1.4,0,2,0.2c0.3,0.2,0.7,0.6,1,0.9
    c1.7,1.8,1.9,4.1,2,5.1c0.4,0.1,1,0.2,1.4,0.4c0.1,0.2,0.3,0.6,0.3,1.2c0,0.2,0,0.7-0.3,1.2c-0.6,0.3-1,0.6-1.5,0.9l-5.7,8.6
    c-0.4,0.2-1.2,0.7-2.2,0.8c-1.4,0.1-2.4-0.4-2.9-0.7c-2-2.9-4-5.6-5.9-8.5l-1.1-0.3c-0.1-0.1-0.6-0.8-0.7-1.5
    c0-0.9,0.3-1.5,0.6-1.7h0.9c0.6-1,0.7-1.8,0.7-2.3c0-1.1-0.4-1.7,0-2.3c0.3-0.2,0.7-0.6,1.1-0.8C17,13.7,17.9,13.7,18.4,13.7z"/>
  <g id="Layer_2_1_" class="st0">
    <path class="st6" d="M15.6,19.1c-0.3,1.3-1,1.8-1.2,2.6c-0.2,0.7-0.1,1.8,1.2,3.4v3.6c-0.1,0.1-0.6,1-1.7,1.3s-2-0.2-2.1-0.3
      c-0.2-0.1-1.2-1-1.2-2.2c0-0.3,0-1,0.6-1.3c0.2-0.2,0.6-0.2,0.7-0.4c0.1-0.2,0-0.7-0.2-1c-0.1-0.1-1-0.8-1.1-1.9s0.6-2.1,1.7-2.6
      c-0.1-0.2,0.1-0.6-0.2-0.8c-0.2-0.1-0.9-0.3-1.3-1.2c-0.4-0.9-0.2-1.7-0.1-1.9c0.3-0.9,1.2-1.9,1.9-1.7c0.1,0,0.1,0.1,0.2,0.1
      c0.6,0,0.9-1.2,1-1.5c0.6-1.7,2-3,3.2-4.1c2.4-2.3,6.4-2.1,7.2-2.1c6.4,0.3,10.2,6.9,10.5,7.4c0.2,0.4,4.3,2.8,0.4,5.3
      c0,0-0.1,0.7,0,0.8c1,0.3,1.5,1.2,1.5,2.2c0,0.9-0.6,1.8-1.4,2.2l-0.1,0.8c0.9,0.7,1.2,1.9,0.9,2.9c-0.3,0.9-1.1,1.5-2,1.7
      c-1.1,0.1-2.2-0.4-2.8-1.5v-3.5c0.2-0.2,1.3-1.1,1.4-2.6c0.2-2-1.2-3.2-1.4-3.4l0,0v-2c-0.1-0.1-0.2-0.3-0.3-0.4
      c-0.3-0.3-0.6-0.6-0.8-0.7C29.6,16,29.3,16,29,16c-0.6,0.1-0.9,0.3-1,0.3c-0.8,0.4-2.1,0.6-3.6,0.7c-2.4,0.1-5.1-0.1-6.1-0.7
      c-0.1,0-0.3-0.2-0.7-0.3c-0.3-0.1-0.8-0.2-1.3,0c-0.7,0.3-0.9,1.2-0.9,1.2C15.7,17.7,15.7,18.4,15.6,19.1z"/>
  </g>
</g>
<path id="Layer_3" class="st7" d="M27.3,33c0.2,1.5,1,2.8,2.8,3.3l-0.6,0.6c-1.9,1.2-3.6,2.4-5.5,3.6c-0.1,0.1-0.4,0.1-0.6,0
  c-1.9-1.2-3.7-2.4-5.6-3.6l-0.4-0.4c1.7-0.7,2.4-1.8,2.8-3.3c-0.9-0.1-1.5-0.4-1.9-1.2c-1.8,1-3.4,0.1-3.7-1.4
  c-0.9,0.1-1.7,0-2.2-0.7c-0.6-0.7-0.7-1.3-0.3-2.2c-0.8-0.1-1.4-0.4-1.8-1.1c-0.3-0.7-0.3-1.3,0.1-2c-1.5-0.7-2-2-1-3.3
  C8,20,8,19.1,9.2,17.8c-0.7-0.6-1-1.1-0.9-1.9s0.7-1.3,1.4-1.7c-0.6-0.6-0.8-1.2-0.6-2s0.8-1.2,1.7-1.4c-0.3-0.7-0.3-1.3,0-2
  c0.4-0.7,1.1-1,1.9-1c0-0.1,0-0.2-0.1-0.3c-0.2-1.3,0.9-2.3,2.3-2.3c0.1,0,0.4-0.1,0.4-0.2c0.7-1.2,1.5-1.7,3.1-1.2
  c0.4-0.7,0.9-1,1.5-1.2c0.7-0.1,1.3,0,1.9,0.4c0.4-0.4,1.1-0.8,1.8-0.8c0.8,0,1.3,0.3,1.8,0.8c1.5-0.7,2.4-0.6,3.4,0.7
  c0.7-0.2,1.3-0.3,2,0S31.9,4.5,32,5c2-0.2,3,1.1,2.6,2.6c2,0.3,2.5,1.8,1.9,3.1c1.7,0.4,2.3,2,1.1,3.4c1.8,0.8,1.9,2.5,0.6,3.6
  c0.6,0.4,0.9,1,0.9,1.8c-0.1,0.7-0.4,1.2-1.1,1.7c0.9,1.7,0.7,2.4-1,3.3c0.3,0.7,0.4,1.3,0.1,1.9c-0.3,0.7-1,1-1.8,1.1
  c0.3,2-0.4,3-2.6,2.9c-0.1,0.8-0.6,1.4-1.3,1.8c-0.8,0.3-1.5,0.2-2.3-0.3C28.8,32.5,28.2,32.9,27.3,33z"/>
</svg>*/}
      </View>
       

       

        {/*  <style>.st0{display:none}.st2{fill:none;stroke:#f6f6f6;stroke-width:.7856;stroke-miterlimit:10}.st4{fill:#f6f6f6}
  </style>*/}
{/*  <Svg height="50%" width="50%" {...Props}>
  <g id="Layer_1_1_">
    <path d="M24.4 41.7l1.2-4.5h-5l1.3 4.5h2.5zM21.7 43l-.4 12.9h3.6L24.6 43h-2.9z" fill="#f6f6f6"/>
    <path class="st2" d="M8.7 54.9h29.9v-14c-.9-.8-2-1.5-3.2-2.3-2.3-1.4-4.5-2.3-6.3-2.8-.4.4-2.5 2.1-5.6 1.9-2.8-.2-4.5-1.8-5-2.2-1-.2-9.8 4.2-9.7 5.1 0 4.8-.1 9.5-.1 14.3z"/>
    <path d="M18.6 36.2s2.4 18.6 2.6 18.6 4.6-.1 4.6-.1l4-18.7c-.6.4-2.9 2.2-6.1 2.1-2.8-.1-4.5-1.4-5.1-1.9z" fill="none" stroke="#f6f6f6" stroke-width=".785" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
    <path class="st4" d="M32.4 46.2h-.3c-.6 0-1-.4-1-1s.4-1 1-1h.3c.6 0 1 .4 1 1 .1.5-.3 1-1 1z"/>
    <path class="st2" d="M32.3 44.4c-.3-5.2-2.9-8.3-2.9-8.3m-11.2 0s-1.4.4-3.2 5.2"/>
    <path class="st2" d="M13.2 50.4s-.2 0-.3-.2c-.1-.1-.1-.3-.1-.3 0-2.3.1-4.6.1-6.9.1-.2.3-.6.7-.9.2-.3.6-.6.9-.7.8-.3 1.4-.1 1.7 0 .9.3 1.2 1.1 1.3 1.3.3 2.1.7 4.1.9 6.2-.1.2-.2.6-.2.8"/>
    <circle class="st4" cx="18" cy="50.4" r="1"/>
    <circle class="st4" cx="13.9" cy="50.9" r="1"/>
    <path d="M18.4 13.7c2.2 1.7 3.6 1.7 4.5 1.3 1.3-.4 1.8-1.9 3.5-2.2.8-.1 1.4 0 2 .2.3.2.7.6 1 .9 1.7 1.8 1.9 4.1 2 5.1.4.1 1 .2 1.4.4.1.2.3.6.3 1.2 0 .2 0 .7-.3 1.2-.6.3-1 .6-1.5.9l-5.7 8.6c-.4.2-1.2.7-2.2.8-1.4.1-2.4-.4-2.9-.7-2-2.9-4-5.6-5.9-8.5l-1.1-.3c-.1-.1-.6-.8-.7-1.5 0-.9.3-1.5.6-1.7h.9c.6-1 .7-1.8.7-2.3 0-1.1-.4-1.7 0-2.3.3-.2.7-.6 1.1-.8.9-.3 1.8-.3 2.3-.3z" fill="none" stroke="#f6f6f6" stroke-width="1.081" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
    <path d="M15.6 19.1c-.3 1.3-1 1.8-1.2 2.6-.2.7-.1 1.8 1.2 3.4v3.6c-.1.1-.6 1-1.7 1.3s-2-.2-2.1-.3c-.2-.1-1.2-1-1.2-2.2 0-.3 0-1 .6-1.3.2-.2.6-.2.7-.4.1-.2 0-.7-.2-1-.1-.1-1-.8-1.1-1.9s.6-2.1 1.7-2.6c-.1-.2.1-.6-.2-.8-.2-.1-.9-.3-1.3-1.2-.4-.9-.2-1.7-.1-1.9.3-.9 1.2-1.9 1.9-1.7.1 0 .1.1.2.1.6 0 .9-1.2 1-1.5.6-1.7 2-3 3.2-4.1 2.4-2.3 6.4-2.1 7.2-2.1 6.4.3 10.2 6.9 10.5 7.4.2.4 4.3 2.8.4 5.3 0 0-.1.7 0 .8 1 .3 1.5 1.2 1.5 2.2 0 .9-.6 1.8-1.4 2.2l-.1.8c.9.7 1.2 1.9.9 2.9-.3.9-1.1 1.5-2 1.7-1.1.1-2.2-.4-2.8-1.5v-3.5c.2-.2 1.3-1.1 1.4-2.6.2-2-1.2-3.2-1.4-3.4h0v-2c-.1-.1-.2-.3-.3-.4-.3-.3-.6-.6-.8-.7-.5-.3-.8-.3-1.1-.3-.6.1-.9.3-1 .3-.8.4-2.1.6-3.6.7-2.4.1-5.1-.1-6.1-.7-.1 0-.3-.2-.7-.3-.3-.1-.8-.2-1.3 0-.7.3-.9 1.2-.9 1.2.3.5.3 1.2.2 1.9z" fill="#f6f6f6" stroke="#f6f6f6" stroke-width=".129" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" id="Layer_2_1_"/>
  </g>
  <path id="Layer_3" d="M27.3 33c.2 1.5 1 2.8 2.8 3.3l-.6.6c-1.9 1.2-3.6 2.4-5.5 3.6-.1.1-.4.1-.6 0-1.9-1.2-3.7-2.4-5.6-3.6l-.4-.4c1.7-.7 2.4-1.8 2.8-3.3-.9-.1-1.5-.4-1.9-1.2-1.8 1-3.4.1-3.7-1.4-.9.1-1.7 0-2.2-.7-.6-.7-.7-1.3-.3-2.2-.8-.1-1.4-.4-1.8-1.1-.3-.7-.3-1.3.1-2-1.5-.7-2-2-1-3.3C8 20 8 19.1 9.2 17.8c-.7-.6-1-1.1-.9-1.9s.7-1.3 1.4-1.7c-.6-.6-.8-1.2-.6-2s.8-1.2 1.7-1.4c-.3-.7-.3-1.3 0-2 .4-.7 1.1-1 1.9-1 0-.1 0-.2-.1-.3-.2-1.3.9-2.3 2.3-2.3.1 0 .4-.1.4-.2.7-1.2 1.5-1.7 3.1-1.2.4-.7.9-1 1.5-1.2.7-.1 1.3 0 1.9.4.4-.4 1.1-.8 1.8-.8.8 0 1.3.3 1.8.8 1.5-.7 2.4-.6 3.4.7.7-.2 1.3-.3 2 0s1.1.8 1.2 1.3c2-.2 3 1.1 2.6 2.6 2 .3 2.5 1.8 1.9 3.1 1.7.4 2.3 2 1.1 3.4 1.8.8 1.9 2.5.6 3.6.6.4.9 1 .9 1.8-.1.7-.4 1.2-1.1 1.7.9 1.7.7 2.4-1 3.3.3.7.4 1.3.1 1.9-.3.7-1 1-1.8 1.1.3 2-.4 3-2.6 2.9-.1.8-.6 1.4-1.3 1.8-.8.3-1.5.2-2.3-.3-.3.6-.9 1-1.8 1.1z" fill="none" stroke="#f6f6f6" stroke-width="1.219" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
</Svg>*/}

 
            <View style={styles.container1}>
            <Image accessible={true} accessibilityLabel="bsmslogo" source={require('../assets/images/BSMS_logo_WO.png')} style={{width: 250, height: 50, marginTop: 50}} />
  </View>
          </View>
          <View style={{ backgroundColor: "#C70039", alignItems: 'center'}}>
            <Text accessible={true} accessibilityLabel="introduction" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>INTRODUCTION</Text>
            <Text accessible={true} accessibilityLabel="welcome to bsms " style={{ color: 'white', fontSize: 16, marginTop: 10, marginLeft: 30, textAlign:"left", paddingRight:30}}>Welcome to the clinical practice component of Phase 1 teaching. The aim of your placements in both community and secondary care is to facilitate the development of your communication and examination skills in a protected environment. You will be able to observe your clinical teachers seeing patients and, as you become more proficient, you will be allowed to practise some clinical skills under close supervision.</Text> 
            <Image accessible={true} accessibilityLabel="Duncans Signature" source={require('../assets/images/DuncanSigW-01.png')} style={{width: 80, height: 80, marginTop: 10}} />
            <Text accessible={true} accessibilityLabel="dr duncan shrewsbury" style={{ color: 'white', fontSize: 12, marginTop: 5, textAlign:"center"}}>Dr Duncan Shrewsbury</Text>
<Text accessible={true} accessibilityLabel="introduction" style={{ color: 'white', fontSize: 12, marginTop: 5, textAlign:"center"}}>Clinical & Community Practice Module Lead</Text>


          </View>
          <View style={{ backgroundColor: "#063359", alignItems: 'center'}}>
            <Text accessible={true} accessibilityLabel="dress code" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>DRESS CODE</Text>
            <Text accessible={true} accessibilityLabel="description of dress code" style={{ color: 'white', fontSize: 16, marginTop: 20, marginLeft: 30 }}>Working in a clinical environment and meeting patients will bring you into contact with many different people. The BSMS dress code has been designed to ensure:
Patients feel confident they are being seen by a team of professionals and the dangers of infection are minimised.
All patients and visitors feel their beliefs are respected. Age group, ethnic origin and religion can influence patients’ views on dress and it is important not to cause un-necessary offence or upset. </Text> 
            </View>
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text accessible={true} accessibilityLabel="attendance login" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>ATTENDANCE LOGIN</Text>

<TouchableOpacity onPress = {this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130, marginTop: 80, }} />
<Text accessible={true} accessibilityLabel="Placement attendance login" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>Placement record</Text>
<Text accessible={true} accessibilityLabel="Placement attendance login" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>login here</Text>
</TouchableOpacity>


     {/*     <TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130, }} />   
<Text>login here</Text>
</TouchableOpacity>*/}
            
          </View>
        

        </IndicatorViewPager>
      </View>
    );
  }
 
  /*_renderTitleIndicator() {
    return <PagerTitleIndicator titles={["introductions","head and neck", "ear, nose and throat", "thorax", "abdomen and pelvis","back and limbs","embryology"]} />;
  }*/
 
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
 
  /* _renderTabIndicator() {
    let tabs = [
      {
        text: "head and neck",
      },
      {
        text: "ear, nose and throat",
      },
      {
        text: "thorax",
      },
      {
        text: "abdomen and pelvis",
      },
      {
        text: "back and limbs",
      },
      {
        text: "embryology",
      }
    ];
    return <PagerTabIndicator tabs={tabs} />;
  } */
}
const styles = StyleSheet.create({
  BoxBorder: (height, width) => ({
    marginTop: 20 * vw,
    width: (width /3)-10 * vw, 
    height: '40%' * vh,
    borderColor: '#bcba40' * vw,
    borderStyle:'dotted' * vw,
    borderRadius: 8 * vw,
    borderWidth: 1 * vw,
    marginHorizontal: 5 * vw,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  container1: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
  },
});