import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import SessionReducer from './reducers/session_reducer';
import LoginForm from './components/login_form';
import ProfileScreen from './components/profile_screen';
import FeedScreen from './components/feed_screen';
import CalendarScreen from './components/calendar_screen';
import MessageScreen from './components/message_screen';
import RootNavigator from './navigation/root_navigator';
// import { SignedOut, SignedIn } from './app/router';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>
        <RootNavigator />
      </Provider>
    );
  }
}


export default App;

// <View >
//   <LoginForm />
//   <RootNavigator />
// </ View>
