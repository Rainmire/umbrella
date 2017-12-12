import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  constructor(props) {
    super(props);

    this.state= {
      children: [{
        name: 'May',
        class: 'Room 24',
        teacher: 'Ms. Lee',
        contact: '415-213-9024',
        image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
      }, {
        name: 'April',
        class: 'Room 9',
        teacher: 'Mr. Z',
        contact: '415-213-9009',
        image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
      }],
      currentChild: null
    }

  }

  static navigationOptions = {
    tabBarLabel: 'Profile'
  }

  componentWillMount() {
    this.setState({ currentChild: [this.state.children[0]] });

  }

  fetchData = async () => {
    const response = await fetch('/api/user')
      .then(e => console.error(e));
    const json = response.json();
    this.setState({ children: json.results });
  }

  _renderSwitchChildren = () => {
    if (this.state.children.length > 1) {
      return (
        <TouchableOpacity
          onPress={this._switchChild}
          style={styles.switchChildButton}
        >
          <Text style={styles.buttonText}> Switch Child </Text>
        </ TouchableOpacity>
      )
    }
  }

  _renderItem = ({ item }) => (
    <View style={styles.profileScreen}>
      <View>
        <Image
          source={{ uri: `${item.image_url}` }}
          style={styles.photo}
          />
      </View>
      <View style={styles.childInfoContainer}>
        <View style={styles.childInfo1}>
          <Text style={styles.text}>Name:   {`${item.name}`}</Text>
          <Text style={styles.text}>Class:   {`${item.class}`}</Text>
        </View>
        <View style={styles.childInfo2}>
          <Text style={styles.text}>Main Teacher:   {`${item.teacher}`}</Text>
          <Text style={styles.text}>Contact:   {`${item.contact}`}</Text>
        </View>
      </View>
    </View>
  )



  _switchChild = () => (
    console.log('You have switched children')
  )

  render() {
    return (
      <View style={styles.profileScreen}>
        <FlatList
          data={ this.state.currentChild }
          keyExtractor={(x, i) => i }// change to the id
          renderItem={ this._renderItem }
        ></FlatList>
        { this._renderSwitchChildren() }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  childInfoContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  childInfo1: {
    height: 75,
    width: 300,
    borderWidth: .5,
  },
  childInfo2: {
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
    height: 150,
    width: 150,
    borderWidth: 2,
    marginBottom: 50,
    borderRadius: 75,
    // alignItems: 'center',
  },
  switchChildButton: {
    height: 50,
    width: 300,
    flex: 1,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bddfeb',
    borderRadius: 30,
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 24,
    color: 'blue',
  }
});

export default ProfileScreen;

// this is what I had before using flatList
// <View>
//
//   <View style={styles.profileScreen}>
//     <View style={styles.photo}>
//       <Text>Photo</Text>
//     </View>
//     <View >
//       <View style={styles.box}>
//         <Text style={styles.text}>Name: </Text>
//         <Text style={styles.text}>Class: </Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.text}>Main Teacher: </Text>
//         <Text style={styles.text}>Contact: </Text>
//       </View>
//     </View>
//   </View>
//
// </View>

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
