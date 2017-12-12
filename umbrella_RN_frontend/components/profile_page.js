






import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import RootNavigator from '../navigation/root_navigator';
import { onSignOut } from '../app/auth';

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
class ProfileScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Profile'
  }

  render() {
    
    return (
      <View>
        <View style={styles.profileScreen}>
          <View style={styles.photo}>
            <Text>Photo</Text>
          </View>
          <View >
            <View style={styles.box}>
              <Text style={styles.text}>Name: </Text>
              <Text style={styles.text}>Class: </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>Main Teacher: </Text>
              <Text style={styles.text}>Contact: </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>Milestones: </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  profileScreen: {
    flex: 1, 
    alignItems: 'center', 
    paddingTop: 50,
    // justifyContent: 'center',
  },
  box: {
    height: 75,
    width: 300,
    borderWidth: .5,

  },
  text: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingLeft: 10,
  },
  photo: {
    // flex: 1,
    height: 100,
    width: 100,
    borderWidth: 2,
    marginTop: 25,
    marginBottom: 25,

  },
  milestones: {
    height: 1,
    width: 280,
    // paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: 'red',
  },
  button: {
    padding: 100,

    
  }
});  

export default ProfileScreen;


// <Button
// style={styles.button}
//   onPress={ () => onSignOut().then(() => this.props.navigation.navigate('SignedOut'))}
//   title='Sign Out'
// > </Button>
// <Button 
// style={styles.button}
// onPress={() => console.log('put function here to switch current child')}
//   title='Switch Child Profile'
// ></Button>