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
  //get app from API
 
axios.get('Web URL')
.then(function(response) {
    // handle response
}).catch(function(error) {
    // handle error
}).finally(function() {
    // always executes at the last of any API call
});
 <View>
<FlatList 
        style={{marginLeft : "1%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.postalCode}, {item.title}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => viewItem(item.title)}></Text></View>} 
        data={surgery} 
        //ItemSeparatorComponent={listSeparator} 
      
      />      
 </View>
 



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
    color: "#000"

  },
//});
