import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import RootReducer from './reducers/root_reducer';
import GoogleLoginContainer from './components/googlelogin_container';
import thunk from 'redux-thunk';

// import LoginForm from './components/login_form';
import RootNavigator from './navigation/root_navigator';
// import GoogleLogin from './components/googlelogin';
// import SwitchChildScreen from './components/switch_child_screen';
import SimpleNav from './navigation/root_navigator';
// import Router from './navigation/router';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(RootReducer, applyMiddleware(logger,thunk))}>
        <GoogleLoginContainer />
      </Provider>
    );
  }
}

// <SimpleNav />

export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
