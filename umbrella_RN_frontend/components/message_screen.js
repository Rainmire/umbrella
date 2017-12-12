import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class MessageScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Messages',
    
    
  };

  render() {
    console.log(this)
    console.log(this.props)
    
    return (
      <View> 
        <Text style={styles.messages}>
          This is the Message screen.
          This screen will be the direct chat capability made possible by using websockets.
        </Text>
        
      </View>
    );
  }
} 

export default MessageScreen;

export const styles = StyleSheet.create({
  messages: {
    margin: 50,
  },
});