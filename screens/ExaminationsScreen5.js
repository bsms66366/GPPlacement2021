import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button, FlatList, Image, postalCode} from 'react-native';

import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { LOCATION } from 'expo-permissions';
import Constants from 'expo-constants';

//import {surgery}from './assets/db/surgery.db';

export const openDatabase = async () => {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite)').exists))
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  const [{ uri }] = await Asset.loadAsync(require('../assets/db/surgery.db'));
  await FileSystem.downloadAsync(uri, FileSystem.documentDirectory + 'SQLite/surgery.db');
  return SQLite.openDatabase('//surgery.db');


const db = SQLite.openDatabase('//surgery.db');
const [credit, setCredit] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [courses, setcourses] = useState([])

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists courses (id integer primary key not null, credits int, title text, address text );');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into courses (credits, title, address) values (?, ?);', [parseInt(credit), title, address]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from courses;', [], (_, { rows }) =>
        setcourses(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from courses where id = ?;`, [id]);
      }, null, updateList
    )    
  }
// view course data

const viewList = (id) => {
    db.transaction(tx => {
      tx.executeSql('select * from courses;', [id], (_, { rows }) =>
        setcourses(rows._array)
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

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Wait, we are fetching you location...'
  );

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
        // console.log(item)
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
{/*  <View style={styles.Logo}>
        <Image source={require('../assets/images/geoyellow.png')} style={{ marginTop: 20, marginLeft: 40, width: 50, height: 15 }} />  
      </View>  */}
    
      <TextInput placeholder='Surgery Name' style={{marginTop: 10, fontSize: 18, width: 200, borderColor: '#FAD607', borderWidth: 1, color: '#FAD607'}}
        onChangeText={(title) => setTitle(title)}
        value={title}/>  
        <TextInput placeholder='Surgery Address' style={{marginTop: 10, fontSize: 18, width: 200, borderColor: '#FAD607', borderWidth: 1, color: '#FAD607'}}
        onChangeText={(address) => setAddress(address)}
        value={displayCurrentAddress}/>  
      <TextInput placeholder='date' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: '#FAD607', borderWidth: 1, color: '#FAD607'}}
        onChangeText={(credit) => setCredit(credit)}
        value={credit}/>  
          {/* <TextInput style={{fontSize: 20, color: '#FAD607',width: 350, height: 35,   paddingLeft:50 }}>{displayCurrentAddress}</TextInput>     */}
      <Button  onPress={saveItem} title="Save"  /> 
      {/* <Button style={{fontSize: 18, color: '#005E7E'}} onPress={deleteItem} title="Delete"  />  */}
      <Text accessible={true} accessibilityLabel="courses postcode" style={styles.titleText}>   Placement Location </Text>
      <FlatList 
        style={{marginLeft : "1%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.title}, {item.credits}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Delete</Text></View>} 
        data={courses} 
        //ItemSeparatorComponent={listSeparator} 
      />      
    </View>
  );


const styles = StyleSheet.create({
 container: {
  flex: 1,
  //paddingTop: 5,
  backgroundColor: '#005E7E',
  //backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#FAD607',
  //borderColor: '#FAD607',
  //paddingTop: 5,
  borderRadius: 20,
  padding: 15,
  marginVertical: 5,
  marginHorizontal: 8,
  marginBottom: 15,
  alignItems: 'center', 
  fontWeight: 'bold',
  fontFamily: 'Roboto-Regular',
  fontSize: 18, 
 },
 titleText: {
  fontWeight: 'bold',
  fontFamily: 'Roboto-Regular',
  fontSize: 18, 
  //fontSize: RFPercentage(2),
  //color:'#000',
  color:'#FAD607',
  //justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 10,
  paddingTop: 5,
},
item: {
  backgroundColor: '#FAD607',
  borderRadius: 20,
  padding: 15,
  marginVertical: 5,
  marginHorizontal: 8,
  marginBottom: 15,
}, 
Button:{
  color:'#FAD607',

}
});