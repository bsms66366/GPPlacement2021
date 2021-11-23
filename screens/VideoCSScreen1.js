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

const DATA = require("../data/VideoCS.json");
//console.log(DATA)
/* 
const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}; */

//const [refreshing, setRefreshing] = React.useState(false);

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const [forceUpdate, forceUpdateId] = useForceUpdate();
  //const [handleRefresh, setfresh] = setState ({ refreshing: false });
  isFetching: false,
//re-freshlist
/* const onRefresh = React.useCallback(() => {
  setRefreshing(true);

  wait(2000).then(() => setRefreshing(false));
}, []); */

  //console.log(data);

/*   useEffect(() => {
    fetch('https://bdr17.brighton.domains/fetch/VideoCS.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); 
  }, 
  []); */
/* null,
 forceUpdate; */

  //this.setState({ refreshing: false });
 console.log(data);
 
/* let newDataArr = data
 newDataArr.push(newData)
 setData(newDataArr) */


 
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.Logo}>
    <View style={styles.Logo}>
    <Text style={{ color: '#FFF', fontSize: 20, marginTop: 10, marginBottom:15, textAlign:"center"}}>CLINICAL SKILLS VIDEOS</Text>
      </View>
      <View>
        
      </View>
      <FlatList
        //data={DATA.video.video}
        data={DATA.data.data}
        //data={data.data.data}
        keyExtractor={(id,item, index) => 'item'+index} //Add this line
        renderItem={({ item }) => (
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.urlPath)}>
      
         <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        </TouchableOpacity> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
   
    </SafeAreaView>
  );
}

//styles
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
  title: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "#000",

  },
});






