// Visualize data with Speedometer Graph in React Native
// https://aboutreact.com/react-native-speedometer-graph/

// import React in our code
import React, {useState} from 'react';
import Constants from 'expo-constants';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  row,
  flexDirection,
  flexWrap
} from 'react-native';


import ProgressCircle from 'react-native-progress-circle'
  //Import library for Speedometer
//import RNSpeedometer from 'react-native-speedometer';

fetch('http://CJs-Work-Mac.local/api/placement', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'test',
      //secondParam: '{studentID} '
    })
  }); 



const Attendance = () => {
  //const [meterValue, setMeterValue] = useState(20);

  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={styles.container}>
      <View style={styles.container1}>
      <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle> 
        <Text style={{ fontSize: 20, marginTop:10, paddingRight:150 }}>
            Total Adverage
          </Text>
      </View>
      {/* <View style= {styles.container2}> */}
<ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#bcba3e"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{ fontSize: 18 }}>{'50%'}</Text>
        </ProgressCircle>
        <Text style={{ fontSize: 20, marginTop:10, paddingRight:150 }}>
            Total Adverage
          </Text>
{/*  </View> */}
  <View style= {styles.container3}>
<ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#bcba3e"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{ fontSize: 18 }}>{'50%'}</Text>
        </ProgressCircle>
        <Text style={{ fontSize: 18 }}>Total Adverage</Text>
</View>
</View>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: row,
    //marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: "#005E7E",
  },

  container1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
  },

  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
  
});
