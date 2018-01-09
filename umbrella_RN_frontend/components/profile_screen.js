import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onSignOut } from '../app/auth';
// import styles from '../stylesheets/profile_screen';
import SwitchChildScreen from './switch_child_screen';
import navigateAction from '../navigation/router';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTeacher: false
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={30} color="#00F" />
    )
  }

  componentWillReceiveProps() {
    if (this.props.currentUser && this.props.currentUser.teacher_class) {
      this.setState({ isTeacher: true });
    }
  }

  handleSignout(){
    return ()=>{
      AsyncStorage.getItem('token').then((returntoken)=> {
        this.props.logoutUser(returntoken);
        AsyncStorage.removeItem('token').then(()=>{
          this.props.navigation.navigate("SignedOut");
        });
      });
    }
  }

  _switchChild = () => (
    this.props.navigation.navigate('SwitchChild')
  )

  _renderSwitchChildren = () => {
    if (this.props.children.length > 1) {
      return (
        <TouchableOpacity
          onPress={this._switchChild}
          style={styles.profileButton}
        >
          <Text style={styles.switchChildButtonText}>
            Switch Child
          </Text>
          <Icon name="arrow-right" size={20} color="#900" />
        </ TouchableOpacity>
      )
    }
  }

  _renderLogOutButton = () => (
    <TouchableOpacity
      onPress={this.handleSignout()}
      style={styles.logOutButton}
    >
      <Text style={styles.signOutButtonText}> SIGN OUT </Text>
    </ TouchableOpacity>
  )


  _renderItem = ( { item } ) => {
   let currentChild = item.currentChild;
   let teacher = item.teacher;

    return(
      <View style={styles.profileScreen}>
        <View>
          <Image
            source={{ uri: `${currentChild.profile_pic}` }}
            style={styles.photo}
            />
        </View>
        <View style={styles.childInfoContainer}>
          <View style={styles.childInfo1}>
            <Text style={styles.text}>Name:   {`${currentChild.name}`}</Text>
            <Text style={styles.text}>Class:   {`${teacher.teacher_class}`}</Text>
          </View>
          <View style={styles.childInfo2}>
            <Text style={styles.text}>Main Teacher:   {`${teacher.name}`}</Text>
            <Text style={styles.text}>Contact:   {`${teacher.contact}`}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {

    if (!this.state.isTeacher) {
      return (
        <View style={styles.profileScreen}>
          <FlatList
            data={ [this.props] }
            keyExtractor={ (item) => item.currentChild.id }
            renderItem={ this._renderItem }
          />
          { this._renderSwitchChildren() }
          { this._renderLogOutButton() }
        </View>
      );
    } else {
      return (
        <View style={styles.profileScreen}>
          <Image
            source={{ uri: `${this.props.currentUser.profile_pic}` }}
            style={styles.photo}
            />
          { this._renderLogOutButton() }
        </View>
      )
    }
  }
}

export default ProfileScreen;

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
    height: 150,
    width: 150,
    borderWidth: 2,
    marginBottom: 50,
    borderRadius: 75,
  },
  buttonContainer: {
    height: 100,
    width: 300,
    flex: 1,
    flexDirection: 'column',
  },
  profileButton: {
    height: 50,
    width: 300,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#bddfeb',
    borderRadius: 30,
    marginBottom: 20,
    paddingRight: 20
  },
  logOutButton: {
    height: 20,
    width: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bddfeb',
    borderRadius: 30,
    marginBottom: 20,
    // paddingRight: 20
  },
  switchChildButtonText: {
    fontSize: 18,
    color: 'blue',
    paddingRight: 50
  },
  signOutButtonText: {
    fontSize: 18,
    color: 'blue',
  }
});
