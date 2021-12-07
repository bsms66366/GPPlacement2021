import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  
} from "react-native";


import {
 LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class Linedchart extends Component {
  state = {
datasource:[]
  };

LineChart_Dynamic=()=>{

if (this.state.datasource){
if(this.state.datasource.length){

return(
<View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data:  this.state.datasource.map(item=>{
            return(
              item.students 
//you need to add your data here from JSON, and remember the data you are requesting should be integer.
            )
          })
          
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="students"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
)
} else {
return(

<View style={{justifyContent:"center",alignItems:'center',flex:1}}>

<ActivityIndicator size="large"/>

</View>

)
  }

}else {

  return(
  
  <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
  
 <Text>no data found</Text>
  
  </View>
  )}

  }

//***************************************************************
//fetch your own data from here

get_chart=()=>{

              fetch('http://192.168.1.59:8000/api/room', {
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
  componentDidMount=()=>{
    this.get_chart()
  }

  render() {

return(
<View>

{this.LineChart_Dynamic()}

</View>

)}}

export default Linedchart;