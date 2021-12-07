import React from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";
import Login from "../components/Login";
import Form from "../components/Form";
import ChoiceList from "../components/ChoiceList";
import * as firebase from "firebase";

export default function App() {
  const [user, setUser] = React.useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyBEQMLljlH7XibdTCWnlWKnTOVAp4VI8Uk",
    authDomain: "logbook-ae991.firebaseapp.com",
    databaseURL: "https://logbook-ae991.firebaseio.com/registrations/ZzG2RkcXoNilpp1SwhEv",
    projectId: "logbook-ae991",
    storageBucket: "gs://logbook-ae991.appspot.com",
    messagingSenderId: "962584022257",
    appId: "1:962584022257:web:ad3da6458be42b631d6d50",
    measurementId: "229774498",
  };

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(setUser);
  if (!user)
    return (
      <View style={s.root}>
        <Login />
      </View>
    );

  const userDoc = firebase.firestore().collection("users").doc(user.email);
  //const Choices = firebase.firestore().collection("choices").doc(user.email);
  return (
    <View style={s.root}>
      <View style={{ flexDirection: "row", padding: 20, marginBottom: 30}}>
        <Text style={{ marginRight: 30 }}>{`Logged in as: ${user.email}`}</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
      </View>
<View style={StyleSheet.container}>
      <Form docRef={userDoc} />
      <ChoiceList docRef={userDoc} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
 container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: 15,
    alignSelf: "center",
    justifyContent: "center",
    width: 120, 
    height: 60

  },
});