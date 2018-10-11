

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Records from './Records';
import Add from './Add';
import SignUp from './screens/SignUp';
import Login from './screens/Login';


const RootStack = createStackNavigator(
  {
    Home: Home,
    Records: Records,
    Add: Add,
    SignUp:SignUp,
    Login:Login,
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

