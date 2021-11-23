import React, { useEffect, useState } from 'react';
//import { FlatList, Text, View } from 'react-native';
import { View, RefreshControl, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    //await Promise.all(data)
    fetch('https://bdr17.brighton.domains/Breathing.json')
    //fetch('http://CJs-Work-Mac.local/api/Placement')
    
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
        <Text style={{ fontSize: 18, color: '#005E7E', textAlign: 'center'}}>{data.urlPath}, {data.title}</Text>
        {/* <Text style={{ fontSize: 18, color: '', textAlign: 'center'}}>{data.urlPath}, {data.title}</Text> */}
        <Text style={{ fontSize: 14, color: '#FAD607', textAlign: 'center', paddingBottom: 10}}>Airways Clinical Skills:</Text>
        <FlatList

          data={data.data.data}
          //keyExtractor={({ id }, index) => id}
          
          keyExtractor={(item, index) => 'item'+index} //Add this line
          renderItem={({ item }) => (
             <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.urlPath)}>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center', backgroundColor: '#FAD607', paddingBottom: 10, borderRadius: 20, marginVertical: 5, marginHorizontal: 8, marginBottom: 15,}}>{item.title}</Text>

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

    
    
    
    
    
    
    
      