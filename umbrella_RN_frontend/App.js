import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import SessionReducer from './reducers/session_reducer';
// import LoginForm from './components/login_form';
import ProfileScreen from './components/profile_page';
// import { SignedOut, SignedIn } from './app/router';


class FeedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Feed',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    
  };

  render() {
    console.log(this)
    console.log(this.props)
    
    return (
      <View> 
        <Text style={{margin: 50}}>
          This is the Feed screen.
          This will display an index of messages to the user, posted by the teachers/ admin.
        </Text>
        
      </View>
    );
  }
}

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'Notifications',
// 
//   };
// 
//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  FeedScreen: {
    screen: FeedScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;


// class App extends Component {
//   render() {
//     return (
//       <Provider store={createStore(SessionReducer, applyMiddleware(logger))}>
//         <View>
// 
//           <ProfileScreen />
//         </View>
//       </Provider>
//     );
//   }
// }
// 
// export default App;
