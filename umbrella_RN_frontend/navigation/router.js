import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
// import { Provider } from 'react-redux';
// import SessionReducer from './reducers/session_reducer';
import LoginForm from '../components/login_form';
import RootNavigator from './root_navigator';
// import GoogleLogin from './components/googlelogin';
// import SwitchChildScreen from './components/switch_child_screen';
import SimpleNav from './root_navigator';
// import AuthNav from './navigation/root_navigator';
import { isSignedIn } from '../app/auth';

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('There was a problem signing you in.'));
  }

  createRootNavigator(signedIn = false) {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
}

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    if (signedIn) {
      return <SimpleNav />;
    } else {
      return <LoginForm />;
    }
  }
}

export default Router;
