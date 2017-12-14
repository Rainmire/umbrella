import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import SessionReducer from './reducers/session_reducer';
import LoginForm from './components/login_form';
import RootNavigator from './navigation/root_navigator';
import GoogleLogin from './components/googlelogin';
import SwitchChildScreen from './components/switch_child_screen';
import SimpleNav from './navigation/root_navigator';
import AuthNav from './navigation/root_navigator';
import { isSignedIn } from './app/auth';
import Router from './navigation/router';

class App extends Component {

  render() {

    return (
      <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>
        <Router />
      </Provider>
    );
  }
}


export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
