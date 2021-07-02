import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, Props} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import LocationScreen from '../components/LocationScreen';
//import SkillsScreen from '../screens/SkillsScreen';


export default function SkillsScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  SafeAreaView.setStatusBarHeight(0);

  return (

    <ScrollView style={styles.v_container}>
   
      <View style={{flex: 1, flexDirection: 'column', flexWrap:0}}>
      <View style={{ backgroundColor: "#005E7E", alignItems: 'center'}}>
            
            
             <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://forms.office.com/r/TtaSRxdGxT') }>
             <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/AttendanceSkillCog.png')} style={{width: 175, height: 175, marginTop:40}} />
             <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/Attendancelogo.png')} style={{width: 175, height: 75, marginTop:5}} />
              
            
             {/* <Image accessible={true} accessibilityLabel="Image" source={require('../assets/images/AttendancePointer.png')} style={{width: 90, height: 75, marginTop:10}} /> */}
             </TouchableOpacity>
             <Text style={styles.bodyText} style={{ color: '#FFFFFF'}}>Working  in  a  clinical  environment  and  meeting  patients  will  bring  you  into  contact  with  many  different  people. The BSMS dress code has been  designed to ensure, among other consideration, that the dangers of infection are minimised.</Text> 
             
          </View>
          </View>
       </ScrollView>
 
  );
}



const styles = StyleSheet.create({

box: { 
  //alignItems: 'center',
  width: 900,
  paddingTop: 70,
  paddingLeft: 50,
  //justifyContent: 'center',
},

/*Logo: {
    height: 80,
    alignItems: 'center',
},*/

/*IconStyle:{
    width: 200, 
    height:200,
    alignItems: 'center',
},*/

/*BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-40, 
    height: '50%',
    borderColor: '#bcba40',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  }),*/

v_container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight:15,
    backgroundColor: "#005E7E",
    //backgroundColor: '#282828',#203C89
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bodyText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    textAlignVertical: 'auto'
  },
});
