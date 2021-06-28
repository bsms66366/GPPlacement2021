import { StyleSheet, View, Text, Image,TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import React, { Component } from "react";
import * as Font from 'expo-font';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import HeadNeckScreen from '../screens/HeadNeckScreen';
import AirwayScreen from '../screens/AirwayScreen'
import ENTScreen from '../screens/ENTScreen';
import ThoraxScreen from '../screens/ThoraxScreen';
import AbdoPelvisScreen from '../screens/AbdoPelvisScreen';
import BackLimbsScreen from '../screens/BackLimbsScreen';
import EmbryologyScreen from '../screens/EmbryologyScreen';
import IntroductionsScreen from '../screens/IntroductionsScreen';
import Video360Screen from '../screens/Video360Screen';
import CSScreen from '../screens/CSScreen';
import BreathingScreen from '../screens/BreathingScreen';
import CirculationScreen from '../screens/CirculationScreen';
import DisabilityScreen from '../screens/DisabilityScreen';
import EverythingScreen from '../screens/EverythingScreen';

var {height, width} = Dimensions.get('window');
  console.log (height, width)


// import all basic components
//console.disableYellowBox = true;
//LogBox.ignoreAllLogs()


import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "react-native-best-viewpager";
 



export default class ViewPagerPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ height: 1 }}
          indicator={this._renderDotIndicator()}>
        </IndicatorViewPager>

       
 
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 1, backgroundColor: "#005E7E" }}
          indicator={this._renderDotIndicator()}
        >
        <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>CLINICAL SKILLS RECORD</Text>
            <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/Attendancelogo.png')} style={{width: 175, height: 75, marginTop:120}} />
             <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://127.0.0.1:8000/students') }></TouchableOpacity>
             <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>swipe </Text>
             <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/skillsIcon4.png')} style={{width: 90, height: 75, marginTop:10}} />
          </View>
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 10, textAlign:"center"}}>AIRWAY</Text>
            {/* <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style={{width: 100, height: 130, marginTop:10}} /> */}
            <AirwayScreen/>
          </View>
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>BREATHING</Text>
            {/* <Image source={require('../assets/images/interfaceIcons_Artboard29.png')} style={{width: 140, height: 140, marginTop:10}} /> */}
            <BreathingScreen/>
          </View>
          
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>CIRCULATION</Text>
            {/* <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style={{width: 160, height: 130, marginTop:10}} /> */}
            <CirculationScreen/>
          </View>
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>DISABILITY</Text>
            {/* <Image source={require('../assets/images/interfaceIcons_Artboard24.png')} style={{width: 100, height: 130, marginTop:10}} /> */}
            <DisabilityScreen/>
          </View>
          <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, marginTop: 20, textAlign:"center"}}>EVERYTHING ELSE</Text>
            {/* <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style={{width: 100, height: 130, marginTop:10}} /> */}
            <EverythingScreen/>
          </View>
     

        </IndicatorViewPager>
      </View>
    );
  }
 
  /*_renderTitleIndicator() {
    return <PagerTitleIndicator titles={["introductions","head and neck", "ear, nose and throat", "thorax", "abdomen and pelvis","back and limbs","embryology"]} />;
  }*/
 
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={6} />;
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
    //borderColor: '#bcba40' * vw,
    //borderStyle:'dotted' * vw,
    borderRadius: 4 * vw,
    borderWidth: 1 * vw,
    marginHorizontal: 5 * vw,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    //color: "#FFFFFF"
  }),
});