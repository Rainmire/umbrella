import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import SwitchChildScreen from '../components/switch_child_sreen';


const SwitchChildren = StackNavigator({
  SwitchChildScreen: {
    Main: {
      screen: SwitchChildScreen,
      navigationOptions:({navigation}) => ({
        title: 'Switch Child',

      })
    }
  }
});
