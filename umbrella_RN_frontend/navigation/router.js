import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, AsyncStorage } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
// import { Provider } from 'react-redux';
// import SessionReducer from './reducers/session_reducer';
// import LoginForm from '../components/login_form';
// import RootNavigator from './root_navigator';
// import GoogleLogin from './components/googlelogin';
// import SwitchChildScreen from './components/switch_child_screen';
// import SimpleNav from './root_navigator';
import { SignedInScreen,
         SignedOutScreen,
         createRootNavigator } from './root_navigator';
// import AuthNav from './navigation/root_navigator';
// import { isSignedIn } from '../app/auth';

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    this.isSignedIn();
  }

  isSignedIn(){
    AsyncStorage.getItem("token").then((returntoken) =>{
      if(returntoken){
        this.setState({signedIn: true});
      }
      this.setState({checkedSignIn: true});
    });
  }



  render() {
    if (!this.state.checkedSignIn) {
      return null;
    }

    // if (this.state.signedIn) {
    //   return <SignedIn />;
    // } else {
    //   return <SignedOut />;
    // }
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout />;
  }
}

export default Router;
