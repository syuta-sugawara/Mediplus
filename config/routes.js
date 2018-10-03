import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen2 from '../screens/HomeScreen2';
import MapScreen from '../screens/MapScreen';
import ReviewScreen from '../screens/ReviewScreen';
import DetailReviewScreen from '../screens/DetailReviewScreen';
import RecordScreen from '../screens/RecordScreen';
import AddScreen from '../screens/AddScreen';

export default class Routes extends Component {
  render() {
    const AppStackNavigator = createStackNavigator(
      {
        Login: LoginScreen,
        SignUp: SignUpScreen,
        //Home: HomeScreen,
        Home2: HomeScreen2,
        MapView: MapScreen,
        Review: ReviewScreen,
        DetailReview: DetailReviewScreen,
        Record: RecordScreen,
        Add: AddScreen
      },
      {
        initialRouteName: 'SignUp',
        headerMode: 'none'
      }
    );
    return <AppStackNavigator />;
  }
}
