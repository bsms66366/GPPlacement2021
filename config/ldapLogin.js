//LDAP Login

import React, { Component, useState, useEffect  } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
//import {Provider} from 'react-redux';
//import {store} from 'store';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.59:8000/api/sanctum/token';

export default class App extends Component {

  
 /*  const [email, setEmail] = useState('');
  const [bsmsID, setBsmsID] = useState('');
  const [password, setPassword] = useState(''); */

  constructor(props) {
    super(props);
    
    this.state = {
      bsmsID: '',
      password: '',
    };
  }
  
  onLogin() {
    const { bsmsID, password } = this.state;
     //tambah token ke headers 
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.get(
      'http://192.168.1.59:8000/api/students',{ bsmsID:bsmsID, password:password}
      //'http://192.168.1.59:8000/api/placement',{ surgery:displayCurrentAddress, name:title}
    )
  
    
    .then(data => console.log(data))
      .catch(data => console.log(data)) 
      //}

    //Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.bsmsID}
          onChangeText={(bsmsID) => this.setState({ bsmsID })}
          placeholder={'bsmsID'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});