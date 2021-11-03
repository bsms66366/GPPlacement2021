import axios from 'axios';
import React, { useEffect, useState, setState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class App extends Component 
{
async componentDidMount(){

  const res = await axios.get('http://127.0.0.1:8000/api/Placement');
  //console.log(res);
  if (res.data.status === 200)
  {

    this.setState({
      surgery: res.data.surgery
    });
  }
}

  render(){
  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};
    
}  
    
    
    
    
    
    
    
      