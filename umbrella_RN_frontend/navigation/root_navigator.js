import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LoginForm from './login_form';
import ProfileScreen from '../components/profile_page';
import FeedScreen from '../components/feed';

const RootNavigator = TabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  },
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      headerTitle: 'Feed'
    }
  }
});

export const RootNavigator;