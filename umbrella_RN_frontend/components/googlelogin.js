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

    const token = url.slice(11);
    AsyncStorage.setItem('token', token);
    AsyncStorage.getItem('token').then((returntoken)=> {
      this.props.fetchCurrentUser(returntoken);
    }).then( () => {
      dispatch({
        type:'Reset',
        actions: [{
          type: 'Navigate',
          routeName: 'Home'
        }],
        index: 0
      });
    });

    // .then( () => {
    //     this.props.navigation.navigate("Home");
    // });

    // Extract stringified user string out of the URL
    // const [, user_string] = url.match(/user=([^#]+)/);
    // this.setState({
    //   // Decode the user string and parse it into JSON
    //   user: JSON.parse(decodeURI(user_string))
    // });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  }

  // Handle Login with Facebook button tap
  // loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

  // Handle Login with Google button tap
  loginWithGoogle (){
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
    console.log('google login: ', this);
    return (

        <Icon.Button
          name="google"
          backgroundColor="#DD4B39"
          onPress={this.loginWithGoogle.bind(this)}
          {...iconStyles}
        >
          Log in with Google
        </Icon.Button>
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
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
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
