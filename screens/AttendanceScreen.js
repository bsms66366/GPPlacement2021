import React, { Component } from "react";
import { AppLoading } from "expo";
//import Navigation from "../components/Navigation";
import * as SQLite from 'expo-sqlite';
import { BarCodeScanner } from 'expo-barcode-scanner';
import SQL from "../components/SQL";
import { Ionicons } from '@expo/vector-icons';
//import IoniconsFont from '@expo/vector-icons/website/src/fonts/Ionicons.ttf';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("../assets/fonts/ionicons.ttf")

    });
    SQL.InitDatabase();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Scanner />;
  
