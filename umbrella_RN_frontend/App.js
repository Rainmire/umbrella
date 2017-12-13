import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import SessionReducer from './reducers/session_reducer';
// import LoginForm from './components/login_form';
import GoogleLogin from './components/googlelogin';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>
        <View>
          <GoogleLogin />
        </View>
      </Provider>
    );
  }
}


export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
