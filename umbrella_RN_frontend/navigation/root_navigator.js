import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LoginForm from '../components/login_form';
import ProfileScreen from '../components/profile_screen';
import FeedScreen from '../components/feed_screen';
import CalendarScreen from '../components/calendar_screen';
import MessageScreen from '../components/message_screen';


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
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default RootNavigator;


