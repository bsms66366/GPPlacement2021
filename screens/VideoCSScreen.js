// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React, {useState,useEffect} from 'react';
//import React in our code.
import {StyleSheet, SafeAreaView,View, TouchableOpacity, Text, FlatList, TouchableHighlight, VirtualizedList, StatusBar} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
//import all the components we are going to use.
import axios from 'axios';



const App = () => {
  
  const [data, setData] = useState([]);
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://192.168.1.59:8000/api/video')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('getting data from server');
      });
      console.log(response.data);
  }; 
  
/* 
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.59:8000/api/video'
        // 'https://jsonplaceholder.typicode.com/posts/1',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
    console.log(response.data);
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          //.get('https://jsonplaceholder.typicode.com/posts/2')
          .get('http://192.168.1.59:8000/api/video/2')
          .then(function (response) {
            // handle success
            alert('video 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        }),
      ); 
  };*/
  //const { text, updateText, data, searchImages } = props.store;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
 <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>
       
      <FlatList
        //data={DATA.video.video}
        data={getDataUsingSimpleGetCall}
        //data={data.data.data}
        keyExtractor={(id,item, index) => 'item'+index} //Add this line
        renderItem={({ item }) => (
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.video)}>
      
         <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        </TouchableOpacity> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />


{/*       <FlatList
  ItemSeparatorComponent={
    Platform.OS !== 'android' &&
    (({ highlighted }) => (
      <View
        style={[
          style.separator,
          highlighted && { marginLeft: 0 }
        ]}
      />
    ))
  }
  data={[{ name: 'Name Text', key: 'item1' }]}
  keyExtractor={(id, item, index) => 'item'+index} //Add this line
  //keyExtractor= {(item: key, index: Id)} => string;
  renderItem={({ item, index, separators }) => (
    <TouchableHighlight
      key={item.key}
      //onPress={getDataUsingSimpleGetCall}>
      onPress={() => _this.onPress(item)}
      //onPress={() => onPress(item)}
      //onPress={() => WebBrowser.openBrowserAsync(item.name)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{ backgroundColor: 'green' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  )}
/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  item: {
    backgroundColor: '#FAD607',
    borderRadius: 20,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 8,
    marginBottom: 15,
  },
});

export default App;
