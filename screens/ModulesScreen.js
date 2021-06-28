import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
export default function ModulesScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)

  SafeAreaView.setStatusBarHeight(0);

  return (
    <View style={styles.v_container}>
{/* <Text style={{ fontWeight: 'bold', color: '#005E7E', fontSize: 20, textAlign:"center"}}>MY STUDIES</Text>*/}
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
       
        <View accessible={true} accessibilityLabel="Tap me!" style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116844_1&cmp_tab_id=_333646_1&editMode=true&mode=cpview') }>
            <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} /> 
            <Text accessible={true} accessibilityLabel="Module 101" style={styles.titleText}>   Module 101 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116847_1&cmp_tab_id=_333657_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 102" style={styles.titleText}>       Module 102 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116849_1&cmp_tab_id=_333664_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Icon Image"source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 103" style={styles.titleText}>     Module 103 </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116848_1&cmp_tab_id=_333662_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Module 104" style={styles.titleText}>     Module 104 </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!" >
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116905_1&cmp_tab_id=_333831_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 201" style={styles.titleText}>   Module 201 </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116850_1&cmp_tab_id=_333666_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Image Icon!"source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 202" style={styles.titleText}>   Module 202 </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116852_1&cmp_tab_id=_333673_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Image Icon!"source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 203" style={styles.titleText}>   Module 203 </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_116853_1&cmp_tab_id=_333675_1&editMode=true&mode=cpview') }>
          <Image accessible={true} accessibilityLabel="Image Icon!"source={require('../assets/images/MyStudies5.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Module 204" style={styles.titleText}>   Module 204 </Text>
    </TouchableOpacity>
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
},

IconStyle:{
    width: wp('35%'), 
    height:hp('8%'),
    //alignItems: 'center',
    //justifyContent: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 25,
    width: (width /2)-10, 
    height: '20%',
    borderColor: '#FAD607',
    borderStyle:'solid',
    borderRadius: 8,
    borderWidth: 3,
    marginHorizontal: 5,
    //justifyContent: 'center',
    alignItems: 'center',
  }),

v_container: {
    flex: 1,
    //paddingTop: 30,#FAC01C
    backgroundColor: '#005E7E',
  },

  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    fontSize: RFPercentage(2),
    //color:'#000',
    color:'#FAD607',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
});