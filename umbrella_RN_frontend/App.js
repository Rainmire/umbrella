import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import RootReducer from './reducers/root_reducer';
import GoogleLogin from './components/googlelogin';
import thunk from 'redux-thunk';


class App extends Component {

  render() {
    return (
      <Provider store={createStore(RootReducer, applyMiddleware(logger,thunk))}>
        <View>
          <GoogleLogin />
        </View>
      </Provider>
    );
  }
}

export default App;
