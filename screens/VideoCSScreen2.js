//import React from "react";
import React, { useEffect, useState, setState } from 'react';
import { View, RefreshControl, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
//import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import {
  Dimensions,
  Image,
  //Slider,
  //Text,
  //StyleSheet,
 
  //View,
  //SafeAreaView,
  
  ActivityIndicator, 
  Alert,
  TextInput
 
  //VirtualizedList
} from "react-native";
import { Asset } from "expo-asset";
import Constants from 'expo-constants';
import { Audio, Video } from "expo-av";
import * as Font from "expo-font";
//import List from "../components/List2";
import { MaterialIcons } from "@expo/vector-icons";
//import SearchBar from 'react-native-searchbar';
import axios from 'axios';


export default function App() {
const baseUrl = 'http://192.168.1.59:8000';

// Passing configuration object to axios
axios({
  method: 'get',
  url: `${baseUrl}/api/video/1`,
}).then((response) => {
  console.log(response.data);
});


// Invoking get method to perform a GET request
axios.get(`${baseUrl}/api/video/1`).then((response) => {
  console.log(response.data);
});


 
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.Logo}>
    <View style={styles.Logo}>
    <Text style={{ color: '#FFF', fontSize: 20, marginTop: 10, marginBottom:15, textAlign:"center"}}>CLINICAL SKILLS VIDEOS</Text>
      </View>
      <View>
        
      </View>
      <FlatList
        //data={DATA.video.video}
        //data={name.video}
        data={data.data.data}
        keyExtractor={(id,item, index) => 'item'+index} //Add this line
        renderItem={({ item }) => (
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.video)}>
      
         <View style={styles.item}>
          <Text style={styles.name}>{item.video}</Text>
        </View>
        </TouchableOpacity> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
   </View>
    </SafeAreaView>
  );


//styles
//const styles = StyleSheet.create({
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#005E7E',
  },
  item: {
    backgroundColor: '#FAD607',
    borderRadius: 20,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 8,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "#000",

  },
});

}





