import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button, FlatList, Image, Props } from 'react-native';
//import { SQLite } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const db = SQLite.openDatabase('locationdb.db');

export default function App() {

  

  const [postalCode, setPostalcode] = useState('');
  const [title, setTitle] = useState('');
  const [surgery, setsurgery] = useState([]);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Wait, we are fetching you location...'
  );
  //await Promise.all(data)
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('DROP TABLE IF EXISTS locationdb', []);
      tx.executeSql('create table if not exists surgery (id integer primary key not null, postalCode text,  title text);');
    });
    updateList();    
  }, []);

  // Save surgery
  const saveItem = () => {
    db.transaction(tx => {
      console.log("PostalCode ="  + displayCurrentAddress)
        tx.executeSql('insert into surgery (postalCode, title) values (?, ?);',[displayCurrentAddress, title]);    
      }, null, updateList
      )
      console.log("studentNumber =" + title)
  
axios.post(
  'http://192.168.1.59:8000/api/placement',{ title:title, surgery:displayCurrentAddress }

)
.then(data => console.log(data))
  .catch(data => console.log(data))

 /* fetch('http://192.168.1.59:8000/api/placement', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title:'',
      postalCode: ''
      //secondParam: '{studentID} '
    })
  })
  // .then(response => response.json())
  .then(data => console.log(data))
  .catch(data => console.log(data))
  ; */
  }
 

  // Update surgerylist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from surgery;', [], (_, { rows }) => {
        //console.log(rows._array)
        setsurgery(rows._array)}
      ); 
    });
  }

  // Delete surgery
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from surgery where id = ?;`, [id]);
      }, null, updateList
    )    
  }

// view surgery data
const viewList = (id) => {
    db.transaction(tx => {
      tx.executeSql('select * from surgery;', [id], (_, { rows }) => {
      //console.log(rows._array)
      return setsurgery(rows._array)
    }
       
      ); 
      
    });
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "5%"
        }}
      />
    );
  };

//postCode location finder
const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

 

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      for (let item of response) {
        console.log(item)
        let address = `${item.postalCode}`;

        setDisplayCurrentAddress(address);

        if (address.length > 0) {
          setTimeout(() => {
            //navigation.navigate('Home', { item: address });
          }, 2000);
        }
      }
    }
  };



  return (
    <View style={styles.container}>
    <Text style={{marginTop: 30, fontSize: 20}}>Current location</Text>
      <Image source={require('../assets/geo.png')} style={styles.image} />
      {/* <Text style={styles.text}>{displayCurrentAddress}</Text> */}


      <TextInput placeholder='Student Number' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(title) => setTitle(title)}
        value={title}/>  
     <TextInput placeholder='Postcode' style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        value={displayCurrentAddress}
        editable={false} /> 
     {/*    <TextInput placeholder='Postcode' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(postalCode) => setPostcode (postalCode)}
        value={displayCurrentAddress} />  */}
      <Button onPress={saveItem} title="Save" /> 

 
      
      <FlatList 
        style={{marginLeft : "1%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.postalCode}, {item.title}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => viewItem(item.title)}></Text></View>} 
        data={surgery} 
        //ItemSeparatorComponent={listSeparator} 
      
      />      
    </View>
  );
/*   const URI = 'http://CJs-Work-Mac.local/api/Placement/${surgery}';
 const storeData = async (value) => {
    try {
            let response = await fetch(URI + '/api/placement');
            let responseJsonData = await response.json();
            //return responseJsonData;
        }
    catch(e) {
        console.log(e)
    }
} */
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
 },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20
},
text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff'
  }

});