import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginForm from '../components/login_form';
import ProfileScreen from '../components/profile_screen';
import FeedScreen from '../components/feed_screen';
import CalendarScreen from '../components/calendar_screen';
import MessageScreen from '../components/message_screen';
import SwitchChildScreen from '../components/switch_child_screen';

// const RootNavigator = StackNavigator({
//   Home: { screen: ProfileScreen },
//   SwitchChild: { screen: SwitchChildScreen }
// });
const SwitchProfileScreen = StackNavigator({
  SwitchChildScreen: {
    screen: SwitchChildScreen,
    showLabel: false
  }
});


const RootNavigator = TabNavigator({
  CalendarScreen: {
    screen: CalendarScreen,
  },
  FeedScreen: {
    screen: FeedScreen,
  },
  MessageScreen: {
    screen: MessageScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
  SwitchChildScreen: {
    screen: SwitchProfileScreen,
    showLabel: false
  }

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default RootNavigator;
