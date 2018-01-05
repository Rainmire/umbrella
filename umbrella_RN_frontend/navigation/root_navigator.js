import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginFormContainer from '../components/login_form_container';
import LoginForm from '../components/login_form';
import ProfileContainer from '../components/profile_container';
import MomentsContainer from '../components/moments_container';
import CalendarScreen from '../components/calendar_screen';
import MessageScreen from '../components/message_screen';
import SwitchChildContainer from '../components/switch_child_container';
import MomentForm from '../components/moment_form';
import CaptureImageContainer from '../components/camera/capture_image_container';

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedInScreen,
        navigationOptions: {
          gesturesEnabled: false,
          left: null
        }
      },
      SignedOut: {
        screen: LoginForm,
        navigationOptions: {
          gesturesEnabled: false,
          left: null
        }
      },
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

// switch all screens to containers once containers done
// SignedIn
const HomeNavigator = TabNavigator({
  MomentsScreen: {
    screen: MomentsContainer,
  },
  CalendarScreen: {
    screen: CalendarScreen,
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

// switch all screens to containers once containers done
export const SignedInScreen = StackNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null
    }
  },
  SwitchChild: {
    screen: SwitchChildContainer,
  },
  MomentForm: {
    screen: MomentForm,
  },
  CaptureImage:{
    screen: CaptureImageContainer,
  },
});

// export const SignedOutScreen = StackNavigator({
//   Login: {
//     screen: LoginForm,
//     navigationOptions: {
//       header: null
//     }
//   }
// });
