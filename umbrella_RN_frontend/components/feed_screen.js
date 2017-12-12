import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class FeedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Feed',
    
  };

  render() {
    console.log(this)
    console.log(this.props)
    
    return (
      <View> 
        <Text style={styles.feed}>
          This is the Feed screen.
          This will display an index of messages to the user, posted by the teachers/ admin.
        </Text>
        
      </View>
    );
  }
} 

export default FeedScreen;

export const styles = StyleSheet.create({
  feed: {
    margin: 50,
  },
});