import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './app';
// import People from './people';

const Router = StackNavigator({
  App: { screen: App },
  // People: { screen: People },
});
export default Router;
