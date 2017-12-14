import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginForm from '../components/login_form';
import ProfileContainer from '../components/profile_container';
import MomentsScreen from '../components/moments_screen';
import CalendarScreen from '../components/calendar_screen';
import MessageScreen from '../components/message_screen';
import SwitchChildScreen from '../components/switch_child_screen';

// const RootNavigator = StackNavigator({
//   Home: { screen: ProfileScreen },
//   SwitchChild: { screen: SwitchChildScreen }
// });
// const SwitchProfileScreen = StackNavigator({
//   SwitchChildScreen: {
//     screen: SwitchChildScreen,
//     showLabel: false
//   }
// });

// SignedIn
const RootNavigator = TabNavigator({
  CalendarScreen: {
    screen: CalendarScreen,
  },
  MomentsScreen: {
    screen: MomentsScreen,
  },
  MessageScreen: {
    screen: MessageScreen,
  },
  ProfileScreen: {
    screen: ProfileContainer,
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

// look into screenProps to pass props
const SimpleNav = StackNavigator({
  Home: { screen: RootNavigator }, // SignedIn
  SwitchChild: { screen: SwitchChildScreen }
});


export default SimpleNav;
