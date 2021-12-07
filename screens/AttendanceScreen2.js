// Visualize data with Speedometer Graph in React Native
// https://aboutreact.com/react-native-speedometer-graph/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

  //Import library for Speedometer
import RNSpeedometer from 'react-native-speedometer';
const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.59:8000/api/video')
      .then(({ data }) => {
        console.log(data);
        //console.log("defaultApp -> data", data.name)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

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
  });  */




const Attendance = () => {
  const [meterValue, setMeterValue] = useState(20);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <RNSpeedometer
          value={meterValue}
          //value for Speedometer
          size={200}
          //Size of Speedometer
          minValue={0}
          //Min value for Speedometer
          maxValue={100}
          //Max value for Speedometer
          allowedDecimals={0}
          //Decimals value allowed or not
          noNeedle={0}
          labels={[
            {
              name: 'Low Risk',
              labelColor: '#ff2900',
              activeBarColor: '#ff2900',
            },
            {
              name: 'Medium Risk',
              labelColor: '#f4ab44',
              activeBarColor: '#f4ab44',
            },
            {
              name: 'High Risk',
              labelColor: '#00ff6b',
              activeBarColor: '#00ff6b',
            },
          ]}
          //Labels for the different steps of Speedometer
        />
        <View style={{ marginTop: 70, padding: 20 }}>
          <Text style={{ fontSize: 20 }}>
            Enter the value for the speedometer graph between 0 to 100
          </Text>
          <TextInput
            placeholder="Enter Speedometer Value"
            style={styles.textInput}
            onChangeText={(value) => setMeterValue(value)}
          />
        </View>
        <Speedometer
  primaryArcWidth={40}
  value={40}
  max={100}
  lineCap="round"
  noNeedle
  noLineMarks
  noNumberMarks
  angle={360}
  accentColor="orange"
  noBackground
  duration={500}
  indicatorCentered
  indicatorStyle={{
    color: 'orange'
  }}
  indicatorSuffix='%'
/>

      </View>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
