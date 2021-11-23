import React, { useEffect, useState } from 'react';
//import { FlatList, Text, View } from 'react-native';
import { View, RefreshControl, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  //await Promise.all(data)
  useEffect(() => {
    //await Promise.all(data)
    //fetch('https://bdr17.brighton.domains/fetch/VideoCS.json')
    //fetch('http://192.168.1.59:8000/api/video')
    //fetch('http://127.0.0.1:8000/api/video')

    axios.get(
      'http://192.168.1.59:8000/api/video'
      /*  { 
       name:'', 
       video:''
      
    }  */
    
    )
    
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 console.log(data);
 return (
<SafeAreaView style={styles.container}>
  <View style={{ flex: 1, padding: 24 }}>
  
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
         <Text style={{ fontSize: 18, color: '#005E7E', textAlign: 'center'}}>{data.video}, {data.name}</Text>
       {/* <Text style={{ fontSize: 18, color: '', textAlign: 'center'}}>{data.urlPath}, {data.title}</Text> */}
        <Text style={{ fontSize: 18, fontWeight: ' bold', color: '#FFFFFF', textAlign: 'center', paddingBottom: 10}}>CLINICAL SKILLS VIDEOS:</Text>
        <FlatList

          data={data.video.name}
          //keyExtractor={({ id }, index) => id}
          
          keyExtractor={(item, index) => 'item'+index} //Add this line
          renderItem={({ item }) => (
             <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.video)}>
            <Text style={{ borderRadius: 20, fontSize: 18, color: 'green', textAlign: 'center', backgroundColor: '#FAD607', paddingBottom: 10, marginVertical: 5, marginHorizontal: 8, marginBottom: 15,}}>{item.name}</Text>

          </TouchableOpacity>)}
        />
       
      </View>
    )}
  </View></SafeAreaView>
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

    
    
    
    
    
    
    
      