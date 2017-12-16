import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, AsyncStorage } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { SignedInScreen,
         SignedOutScreen,
         createRootNavigator } from './root_navigator';

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
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout />;
  }
}

export default Router;
