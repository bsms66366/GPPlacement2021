import React, { Component, useEffect, useState, setState } from 'react';
import { Alert, Text, TextInput, View, StyleSheet, Button, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

var {height, width} = Dimensions.get('window');
  console.log (height, width)

const db = SQLite.openDatabase('placement.sqlite3');
const App = () => {
    
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  const scanBarcode = ({ type, data }) => {
    //setBarcode(data).then(() => Alert.alert(`Value was changed to: ${barcode}`));
    setBarcode(data);
  };

  //Database Input
  //const [surgery, setSurgery] = useState({barcode:" " });
  const [surgery, setSurgery] = useState(``);
  //const [title, setTitle] = useState(``);
  const [placement, setPlacement] = useState([]);


  useEffect(() => {
    db.transaction(tx => {
      //tx.executeSql('DROP TABLE IF EXISTS placement', []);
      tx.executeSql('create table if not exists placements (id integer primary key not null, surgery text, title text );');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        console.log("PostalCode ="  + barcode)
         //tx.executeSql('DROP TABLE IF EXISTS placement', []);
        tx.executeSql('insert into placements (surgery) values (?);', [barcode]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from placements;', [], (_, { rows }) =>{
          //console.log(rows._array)
        setPlacement(rows._array)}
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from placements where id = ?;`, [id]);
      }, null, updateList
    )    
  }
// view course data

const viewList = (id) => {
    db.transaction(tx => {
      tx.executeSql('select * from placements;', [id], (_, { rows }) =>
        setPlacement(rows._array)
      ); 
    });
  }
  
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ surgery: 'POST Request Example' })
    };
    fetch('https://bdr17.brighton.domains/bdr17_placements_api', requestOptions)
        .then(response => response.json())
        .then(surgery => setPostId(surgery.id));
        console.log(rows._array)
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  
  return (
    <View style={styles.container}>
    <Text style={styles.subTitleText}>Scan barcode and save to list</Text> 
    <View style={styles.scannerBox}>
      <BarCodeScanner
        onBarCodeScanned={scanBarcode}
        style={{ width: '100%', height: '90%' }}
        type={BarCodeScanner.Constants.Type.back}
      />
      <View style={styles.TextBox}>
      <TextInput
        style={{ backgroundColor: 'white', width: '100%', height: 44 }}
        value={barcode}
        editable={false}
      />
    </View>
    
    </View>

    <View style={styles.SaveButton}>
    
{/* <Button onPurls={saveItem} title="Save"  />   */}

<TouchableOpacity onPress = {saveItem} title="save">
<Text style={styles.subTitleText2}>Save</Text> 
  </TouchableOpacity> 
 </View>

       <View style={styles.SaveButton}>

</View> 
      <FlatList 
        style={{marginLeft : "1%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.surgery}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPurls={() => viewItem(item.id)}></Text></View>} 
        data={placement} 
        //ItemSeparatorComponent={listSeparator} 
      /> 
     
       {/* <Button title="Print and Share" onPurls={() => execute()} />  
       <Button title="Post to database" onPurls={() => this.postData('POST Button Click')} />   */}
    </View>
   
  );
  
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005E7E',
    //backgroundColor: '#ecf0f1',
    justifyContent: "center",
    alignItems: "center",
  },
  TextBox: {
    //height: 160,
    //width: 300,
    //marginLeft: -2,
  },
  SaveButton:{
   height: 25,
    width: 60,
    marginTop: 20,
    borderColor:'#FAD607',
  },
  scannerBox: {
    height: 160,
    width: "100%",
    alignContent: 'center',
    //justifyContent: 'center',
    marginRight: -2,
  },
  //flatListBox: {
    //height: 160,
    //width: 300,
    //marginLeft: -2,
  //},
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    color:'#FAD607',
    fontSize: 18,
    width: 250, 
    height: 44, 
    //justifyContent: 'center',
    //alignItems: 'center',
    //paddingLeft: 10,
    //: 5,
    //marginTop: 30
    
  },
  subTitleText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    color:'#FAD607',
    fontSize: 15,
    width: 270, 
    height: 44, 
  },
  subTitleText2: {
    //flexDirection: 'column',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    marginTop: 15,
    marginLeft: 0,
    padding: 5,
    color:'#FAD607',
    fontSize: 18,
    width: 70, 
    height: 44, 
    borderColor: '#FAD607',
    borderStyle:'solid',
    borderRadius: 8,
    borderWidth: 3,
  },
  subTitleText3: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
    padding: 5,
    color:'#FAD607',
    fontSize: 18,
    width: 14, 
    height: 30, 
    borderColor: '#FAD607',
    borderStyle:'dotted',
    borderRadius: 4,
    borderWidth: 1,
    //justifyContent: 'center',
    alignItems:'flex-start'
  },
  item: {
    backgroundColor: '#FAD607',
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 8,
    marginBottom: 15,
  }, 
  /* BoxBorder: {
    marginTop: 25,
    //width: (width /2)-10, 
    //height: '20%',
    borderColor: '#FAD607',
    borderStyle:'solid',
    borderRadius: 8,
    borderWidth: 3,
    marginHorizontal: 5,
    //justifyContent: 'center',
    alignItems: 'flex-start',
  },
 */

  Button:{
    color:'#FAD607',
  
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
})
export default App