
import React, { Component } from 'react';
import { View } from 'react-native';
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
