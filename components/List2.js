import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const PLAYLIST = [
{
    id: 'ae88c394-b068-4ca0-a104-433712c41563',
    title: 'Welcome to the BSMS Anatomy Department',
    url: 'https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/2_Anatomy%20at%20BSMS%20with%20Dr%20Claire%20Smith.mp4?alt=media&token=ae88c394-b068-4ca0-a104-433712c41563',
  },
{
    id: '3ef1f6f4-20ea-4254-a662-eb4d82865156',
    title: 'Anatomy Dissection at BSMS',
    url: 'https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/Dissection%20BSMS.mp4?alt=media&token=3ef1f6f4-20ea-4254-a662-eb4d82865156',
  },
  {
    id: '2c8c8357-b815-48d5-81e4-4378642a3b23',
    title: '102-Vodcast',
    url:'https://firebasestorage.googleapis.com/v0/b/anatomyinterface.appspot.com/o/102-Vodcast%201.mp4?alt=media&token=2c8c8357-b815-48d5-81e4-4378642a3b23',
  },
 
];


function Item({ item, onPress }) {
  return (
    <View style={styles.item}>
    <TouchableOpacity onPress={() => onPress(item.uri)}>
      <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function List(props) {
  const {playlist, onPress} = props
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ playlist }
        renderItem={({ item }) => <Item item={item} onPress={onPress} />}
        keyExtractor={item => item.uri}/>   
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5
    /*marginTop: Constants.statusBarHeight,*/
  },
  /*Heading:{fontSize: 20,
            fontWeight: "bold",
            color: "#026666",
            //marginTop: 15,
            marginLeft: 45
},*/
            
  item: {
    backgroundColor: '#BABF2A',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },   
});
