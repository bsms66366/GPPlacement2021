import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    fetch('https://bdr17.brighton.domains/fetch/Airway.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 //console.log(data);
 return (

  <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.urlPath}, {data.name}</Text>
        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
        <FlatList
          data={data.data.data}
          //keyExtractor={({ id }, index) => id}
          keyExtractor={(item, index) => 'item'+index} //Add this line
          renderItem={({ item }) => (
            <Text>{item.id + '. ' + item.title + item.urlPath}</Text>
          )}
        />
      </View>
    )}
  </View>
);
};

    
    
    
    
    
    
    
      