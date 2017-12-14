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

=======
import SessionReducer from './reducers/session_reducer';
// import LoginForm from './components/login_form';
import RootNavigator from './navigation/root_navigator';
import GoogleLogin from './components/googlelogin';
import SwitchChildScreen from './components/switch_child_screen';
import SimpleNav from './navigation/root_navigator';
// import Router from './navigation/router';
>>>>>>> f5730a16e6750d033b259959ab7b7adcbeb5d8db

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <Provider store={createStore(RootReducer, applyMiddleware(logger,thunk))}>
        <View>
          <GoogleLoginContainer />
        </View>
=======
      <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>

          <SimpleNav />

>>>>>>> f5730a16e6750d033b259959ab7b7adcbeb5d8db
      </Provider>
    );
  }
}


export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
