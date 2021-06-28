import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
 
export default App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data);
  
    /* useEffect(() => {
      fetch('https://ali.brighton.domains/Interface/Fetch/Airway.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []); */

  const LoadData = async() => {
    try {
 const url = `https://bdr17.brighton.domains/fetch/Airway.json`;
 const res = await fetch(url);
 console.log(res.ok)
 const data = await res.json();
 return data;
}catch(err){

console.error(err)
}
};
( async()=>{
const data = await LoadData();
console.log(data)
})();
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
 
