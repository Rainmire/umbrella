import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
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
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('/api/user');
    const json = response.json();
    this.setState({ children: json.results });
  }

  _renderSwitchChildren = () => {
    return (
      <View style={styles.switchChildren}>
        <Image style={styles.buttonImage}/>
        <Text> Switch Profiles </Text>
      </View>
    )
  }

  _renderItem = ({ item }) => {
    console.log(item)
    return (
      <View>
        <View style={styles.profileScreen}>
          <View>
            <Image
              source={{ uri: `${item.image_url}` }}
              style={styles.photo}
              />
          </View>
          <View >
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
        <View>
          { this._renderSwitchChildren() }
        </View>
      </View>
    )
  }

  //
  // _switchChild = () => (
  //   if (this.props.children.length > 1) {
  //     return(
  //       <View>
  //       <Button>
  //
  //       </Button>
  //       </View>
  //     )
  //   }
  // )

  render() {
    return (
      <View>
        <FlatList
          data={ this.state.currentChild }
          keyExtractor={(x, i) => i }// change to the id
          renderItem={ this._renderItem }
        ></FlatList>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
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
    height: 100,
    width: 100,
    borderWidth: 2,
    marginTop: 25,
    marginBottom: 25,

  },
  switchChilren: {
    flex: 0,
    flexDirection: 'row',
    height: 50,
    width: 300,
    borderWidth: .5,
  },
  buttonImage: {
    height: 50,
    width: 50,
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
