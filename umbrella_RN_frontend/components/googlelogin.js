import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';
import { TabNavigator } from 'react-navigation';


export default class GoogleLogin extends Component {
  constructor(props){
    super(props);
    this.handleOpenURL= this.handleOpenURL.bind(this);
  }

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);

  }

  handleOpenURL({ url }){
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props.navigation;

    const oauthtoken = url.slice(11);
    fetch('http://localhost:3000/api/session/fetch_jwt', {

      method: 'GET',
      headers: { 'oauth_token': oauthtoken }
    }).then(({_bodyInit}) => {
      const JWTtoken = JSON.parse(_bodyInit);
      AsyncStorage.setItem('token', JWTtoken.auth_token);
      console.log(' token in the google login form', JWTtoken);
      AsyncStorage.getItem('token').then((returntoken)=> {
        this.props.fetchCurrentUser(returntoken);
      })
      .then( () => {
        dispatch({
          type:'Navigation/RESET',
          actions: [{
            type: 'Navigate',
            routeName: 'SignedIn'
          }],
          index: 0
        });
      });
    });

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  }

  // Handle Login with Facebook button tap
  // loginWithFacebook = () => this.openURL('https://umbrella-server.herokuapp.com/auth/facebook');

  // Handle Login with Google button tap
  loginWithGoogle (){
    // this.openURL('https://umbrella-server.herokuapp.com/auth/google_oauth2');
    this.openURL('http://localhost:3000/auth/google_oauth2');

  }


  // Open URL in a browser
  openURL(url){
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image source={{ uri: "https://res.cloudinary.com/dreamhousesf/image/upload/v1515912680/turquoise-umbrella-hi_wyxtfw.png" }}
        style={styles.logoImage}></Image>
        <Text style = {styles.text}>Welcome to Umbrella</Text>
        <View style = { styles.buttons}>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={this.loginWithGoogle.bind(this)}
            {...iconStyles}
            >
            Log in with Google
          </Icon.Button>
        </View>
      </View>
    );
  }
}
// const { user } = this.state;

// <View>
//   <View style={styles.container}>
//     { user
//       ? // Show user info if already logged in
//       <View style={styles.content}>
//       <Text style={styles.header}>
//       Welcome {user.name}!
//       </Text>
//       <View style={styles.avatar}>
//       <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
//       </View>
//       </View>
//       : // Show Please log in message if not
//       <View style={styles.content}>
//       <Text style={styles.header}>
//       Welcome Stranger!
//       </Text>
//       <View style={styles.avatar}>
//       <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
//       </View>
//       <Text style={styles.text}>
//       Please log in to continue {'\n'}
//       to the awesomness
//       </Text>
//       </View>
//     }
//   </View>
// </View>
const iconStyles = {
  // flex: 1,
  // flexDirection: 'row',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  height: 20,
  // width: 250,
  // textAlign: 'center',
  padding:20,
  borderRadius: 10,
  iconStyle: { marginLeft: 60 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // justifyContent: 'space-around',
  },
  logoImage: {
    marginTop: 150,
    marginBottom: 50,
    alignSelf: 'center',
    height: 105,
    width: 130,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333',
    marginBottom: 100,
  },
  buttons: {
    width:300,
    alignSelf: 'center',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // margin: 20,
    // marginBottom: 30,
  },
});
// <View style={styles.buttons}>
//   <Icon.Button
//     name="facebook"
//     backgroundColor="#3b5998"
//     onPress={this.loginWithFacebook}
//     {...iconStyles}
//   >
//     Login with Facebook
//   </Icon.Button>





// <View style={styles.container}>
//   { user
//     ? // Show user info if already logged in
//       <View style={styles.content}>
//         <Text style={styles.header}>
//           Welcome {user.name}!
//         </Text>
//         <View style={styles.avatar}>
//           <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
//         </View>
//       </View>
//     : // Show Please log in message if not
//       <View style={styles.content}>
//         <Text style={styles.header}>
//           Welcome Stranger!
//         </Text>
//         <View style={styles.avatar}>
//           <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
//         </View>
//         <Text style={styles.text}>
//           Please log in to continue {'\n'}
//           to the awesomness
//         </Text>
//       </View>
//   }
