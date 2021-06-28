import React from 'react';
import { StyleSheet, View } from "react-native";
//import Login from "./components/Login";
//import Form from "./components/Form";
//import * as firebase from "firebase";
//import '@firebase/auth';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
//import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      // Firebase Config
/* firebaseConfig = {
  apiKey: "AIzaSyDdKrXwNDWZ9Q9F3z35ude-B3a6KRZvVI8",
  authDomain: "bsms-logbook.firebaseapp.com",
  databaseURL: "https://bsms-logbook.firebaseio.com",
  projectId: "bsms-logbook",
  storageBucket: "bsms-logbook.appspot.com",
  messagingSenderId: "202139360189",
  appId: "1:202139360189:web:31b80e0cd7c218f9e9d0d4",
  measurementId: "G-L1VX79JXVC",
},

//if (!firebase.apps.length) firebase.initializeApp(firebaseConfig),

  firebase.auth().onAuthStateChanged(setUser)),
  if (!user)
    return (
      <View style={s.root}>
       
      </View>
    );

  const userDoc = firebase.firestore().collection("users").doc(user.email);

  return (
    <View style={s.root}>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Text style={{ marginRight: 30 }}>{`Logged in as: ${user.email}`}</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
      </View>
      <Form docRef={userDoc} />
      <ChoiceList docRef={userDoc} />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
}); 
    */
    Main: MainTabNavigator,
  })
);
