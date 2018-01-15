import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import LoginFormContainer from '../components/login_form_container';
import GoogleLoginContainer from '../components/googlelogin_container';
import ProfileContainer from '../components/profile_container';
import MomentsContainer from '../components/moments_container';
import CalendarContainer from '../components/calendar_container';
import MessageScreen from '../components/message_screen';
// create containers

import SwitchChildContainer from '../components/switch_child_container';
import MomentFormContainer from '../components/moments_form_container';
import CaptureImageContainer from '../components/camera/capture_image_container';
import SelectStudentsContainer from '../components/select_students_container';

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
        screen: GoogleLoginContainer,
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
    screen: CalendarContainer,
  },
  MessageScreen: {
    screen: MessageScreen,
  },
  ProfileScreen: {
    screen: ProfileContainer,
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: "#1797e2"
  }
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
    screen: MomentFormContainer,
  },
  CaptureImage: {
    screen: CaptureImageContainer,
  },
  SelectStudents: {
    screen: SelectStudentsContainer,
  }
});

// export const SignedOutScreen = StackNavigator({
//   Login: {
//     screen: LoginForm,
//     navigationOptions: {
//       header: null
//     }
//   }
// });
