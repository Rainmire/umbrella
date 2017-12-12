import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';



// this button will route to the Google oAuth link, which will display the 
// google login form
// const LoginScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Login Screen</Text>
//     <Button 
//     onPress={ () => navigation.navigate('Profile')}
//     title='Log In'
//     />
//   </View>
// );
class FeedScreen extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <View>
        <Text style={styles.feed}>
          Dummy Text for feed
        </Text>
      </View>
    );
  }
}

// export const styles = StyleSheet.create({
//   feed: {
// 
//   }
// });  

export default FeedScreen;