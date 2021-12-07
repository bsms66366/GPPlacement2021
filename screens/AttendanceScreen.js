// Visualize data with Speedometer Graph in React Native
// https://aboutreact.com/react-native-speedometer-graph/

// import React in our code
import React, {useEffect, useState} from 'react';
import Constants from 'expo-constants';
//import CircularProgress from 'react-native-circular-progress-indicator';
// import all the components we are going to use
import {
  SafeAreaView,
  //Dimensions,
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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

//import CountdownCircle from 'react-native-countdown-circle'
import ProgressCircle from 'react-native-progress-circle'
  //Import library for Speedometer
//import RNSpeedometer from 'react-native-speedometer';


const Attendance = () => {
  //const [meterValue, setMeterValue] = useState(20);

 /*  get_chart=()=>{

    fetch('https://bdr17.brighton.domains/fetch/VideoCS.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
    })
      .then(response => response.json())

      .then(response => {
       this.setState({datasource:response})
   
      })
      .catch(error => {
      
      });
}

/*componentDidMount will execute the function when the screen is mounted.*/
//componentDidMount=()=>{
//this.get_chart()
//} */

const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    //await Promise.all(data)
    fetch('http://192.168.1.59:8000/api/room')
    //fetch('http://CJs-Work-Mac.local/api/video')
    //fetch('http://127.0.0.1:8000/api/rooms')
    
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 console.log(data);

  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={styles.container}>
      <View style={styles.container1}>





    <Text style={styles.header}>Progress Chart</Text>
      <ProgressChart
        //data={[0.4, 0.6, 0.8]}
        data={[data.id]}
        width={Dimensions.get('window').width -30}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

  
{/* <ProgressCircle
            percent={30}
            radius={110}
            borderWidth={8}
            color="#bcba3e"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{ fontSize: 18 }}>{'50%'}</Text>
        </ProgressCircle>
        <Text style={{ fontSize: 18 }}>Total Adverage</Text>
</View>
<ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#bcba3e"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={{ fontSize: 18 }}>{'50%'}</Text>
        </ProgressCircle>
        <Text style={{ fontSize: 18 }}>absent</Text>*/}
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
