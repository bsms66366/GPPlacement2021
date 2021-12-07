import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
//import * as Font from 'expo-font';
import TabBarIcon from '../components/TabBarIcon';
//import Details from './Components/Details';
//import HomeScreen from '../screens/HomeScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import ModulesScreen from '../screens/ModulesScreen';
//import coursePage from '../screens/coursePage';
//import RegionsScreen from '../screens/RegionsScreen';
//import informationScreen from '../screens/informationScreen';
import InfoScreen from '../screens/InfoScreen';
//import Todolist from '../screens/Todolist';
import ExaminationsScreen1 from '../screens/ExaminationsScreen1';
//import ExaminationsScreen2 from '../screens/ExaminationsScreen2';
//import ExaminationsScreen3 from '../screens/ExaminationsScreen3';
//import ExamLog from '../screens/ExamLog';
import SkillsScreen from '../screens/SkillsScreen';
//import Video360Screen from '../screens/Video360Screen';
import VideoCSScreen4 from '../screens/VideoCSScreen4';

//import svgFileScreen from '../screens/svgFileScreen'
//import svgFile2 from '../screens/svgFile2'
//import VideoViews from '../screens/VideoViews'
import ClinicalSkills from '../screens/ClinicalSkills';
import CSScreen from '../screens/CSScreen';
import ResultScreen from '../screens/ResultScreen';
import CSHomeScreen from '../screens/CSHomeScreen';
//import PhoneLogin from '../screens/PhoneLogin';
//import PlacementScreen from '../screens/PlacementScreen';
//import ScannerScreen from '../screens/ScannerScreen';
//import ScanQRScreen6 from '../screens/ScanQRScreen6';
//import WelcomeScreen from '../screens/WelcomeScreen';
import LocationLog from '../screens/LocationLog';
import FingerPrint1 from '../screens/FingerPrint1';
//import WelcomeScreen from '../screens/WelcomeScreen';
//import SurgeryLog from '../screens/SurgeryLog';
//import fetchScreen2 from '../screens/fetchScreen2';
//import postScreen from '../screens/postScreen';
//import asyncAwait from '../screens/asyncAwait';
//import Details from './Screens/Details';
//import fetchScreen1 from '../screens/fetchScreen1';
//import FetchScreen1 from '../screens/FetchScreen1';
//import HistoryScreen from '../screens/HistoryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    CSHomeScreen: CSHomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios','android'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-link'
      }
    />
  ),
};

HomeStack.path = '';
/*****************************************************Courses****/
const LinksStack = createStackNavigator(
  {
    LocationLog: LocationLog,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'sign in',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android'? 'md-compass' : 'md-link'} />
    //<TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-school' : 'md-link'} />
  ),
};

LinksStack.path = '';

/*****************************************************modules****/
const ModuleStack = createStackNavigator(
  {
    SkillsScreen: SkillsScreen,
  },
  config
);

ModuleStack.navigationOptions = {
  tabBarLabel: 'Skills',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-bed' : 'md-link'} />
  ),
};
/*****************************************************Resources ****/

const SessionsStack = createStackNavigator(
  {
    VideoCSScreen4: VideoCSScreen4,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'Video',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-videocam' : 'md-link'} />
  ),
};

SessionsStack.path = '';

/*****************************************************path pots****/
 const SettingsStack = createStackNavigator(
  {
    AttendanceScreen: AttendanceScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Attendance',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-list' : 'md-link'} />
  ),
};

SettingsStack.path = '';
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
    ModulesScreen: ModulesScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Modules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-book' : 'md-link'} />
  ),
};



GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ModuleStack,
  SessionsStack,
  SettingsStack,
  GameStack,
  
});

tabNavigator.path = '';

export default tabNavigator;
