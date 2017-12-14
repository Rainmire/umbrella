import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import RootReducer from './reducers/root_reducer';
import GoogleLoginContainer from './components/googlelogin_container';
import thunk from 'redux-thunk';

// import LoginForm from './components/login_form';
=======
import SessionReducer from './reducers/session_reducer';
import LoginForm from './components/login_form';
>>>>>>> 250d4aa4e439e685fdee72d623eb87b8a90f859d
import RootNavigator from './navigation/root_navigator';
// import GoogleLogin from './components/googlelogin';
// import SwitchChildScreen from './components/switch_child_screen';
import SimpleNav from './navigation/root_navigator';
import AuthNav from './navigation/root_navigator';
import { isSignedIn } from './app/auth';
import Router from './navigation/router';

class App extends Component {

  render() {

    return (
<<<<<<< HEAD
      <Provider store={createStore(RootReducer, applyMiddleware(logger,thunk))}>
        <SimpleNav />
=======
      <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>
        <Router />
>>>>>>> 250d4aa4e439e685fdee72d623eb87b8a90f859d
      </Provider>
    );
  }
}

// <GoogleLoginContainer />

export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
