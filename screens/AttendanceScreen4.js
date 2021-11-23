// Visualize data with Speedometer Graph in React Native
// https://aboutreact.com/react-native-speedometer-graph/

// import React in our code
import React, {useState} from 'react';
import Constants from 'expo-constants';
//import CircularProgress from 'react-native-circular-progress-indicator';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  TextInput,
  Text,
  View,
  row,
  //ProgressCircle,
  flexDirection,
  flexWrap
} from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';
//import CountdownCircle from 'react-native-countdown-circle'
import ProgressCircle from 'react-native-progress-circle'
  //Import library for Speedometer
//import RNSpeedometer from 'react-native-speedometer';

/* fetch('http://CJs-Work-Mac.local/api/placement', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'test',
      //secondParam: '{studentID} '
    })
  }); */ 



const Attendance = () => {
  //const [meterValue, setMeterValue] = useState(20);

  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={styles.container}>
      <View style={styles.container1}>
      <CircularProgress value={58} />
<CircularProgress
  value={60}
  radius={120}
  duration={2000}
  textColor={'#ecf0f1'}
  maxValue={200}
  title={'KM/H'}
  titleColor={'white'}
  titleStyle={{fontWeight: 'bold'}}
/>
<CircularProgress
  value={60}
  activeStrokeWidth={12}
  textColor={'#ecf0f1'}
/>
</View>
</View>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: row,
    //marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: "#005E7E",
  },

  container1: {
    flex: 1,
    //alignItems: 'flex-start',
    justifyContent: 'center', 
    paddingLeft: 70,
    //alignSelf: 'center'
  },
 /*  container2: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
  }, */

  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
  
});
