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
      <Icon name="user" size={30} color={tintColor} />
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
        <View style={styles.textWithIcon}>
          <Icon name="exchange" size={20} color="#000" style = {styles.icon}/>
          <Text style={styles.switchChildButtonText}>
            Switch Child
          </Text>
        </View>
          <Icon name="chevron-right" size={20} color="grey" />
        </ TouchableOpacity>
      )
    }
  }

  _renderLogOutButton = () => (
    <TouchableOpacity
      onPress={this.handleSignout()}
      style={styles.logOutButton}
    >
      <Text style={styles.signOutButtonText}> Sign Out </Text>
    </ TouchableOpacity>
  )


  // _renderItem = ( { item } ) => {
  //  let currentChild = item.currentChild;
  //  let teacher = item.teacher;
  //
  //   return(
  //     <View style={styles.profileScreen}>
  //       <View>
  //         <Image
  //           source={{ uri: `${currentChild.profile_pic}` }}
  //           style={styles.photo}
  //           />
  //       </View>
  //       <View style = {styles.nameContainer}>
  //         <Text style={styles.name}>{`${currentChild.name}`}</Text>
  //       </View>
  //       <View style={styles.childInfoContainer}>
  //         <View style={styles.childInfo}>
  //           <Text style={styles.text}>Class:   {`${teacher.teacher_class}`}</Text>
  //           <Text style={styles.text}>Main Teacher:   {`${teacher.name}`}</Text>
  //           <Text style={styles.text}>Contact:   {`${teacher.contact}`}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   )
  // }

  render() {

    if (!this.state.isTeacher) {
      let currentChild = this.props.currentChild;
      let teacher = this.props.teacher;
      return (
        <View style={styles.profileScreen}>
          <View>
            <Image
              source={{ uri: `${currentChild.profile_pic}` }}
              style={styles.photo}
              />
          </View>
          <View style = {styles.nameContainer}>
            <Text style={styles.name}>{`${currentChild.name}`}</Text>
          </View>
          <View style={styles.childInfoContainer}>
            <Text style={styles.text}>Class:   {`${teacher.teacher_class}`}</Text>
          </View>
          <View style={styles.childInfoContainer}>
            <Text style={styles.text}>Main Teacher:   {`${teacher.name}`}</Text>
          </View>
          <View style={styles.childInfoContainer}>
            <Text style={styles.text}>Contact:   {`${teacher.contact}`}</Text>
          </View>
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
    paddingTop: 40
  },
  childInfoContainer: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    // flexDirection: "row",
    justifyContent:"center",
    alignSelf: 'stretch',
    backgroundColor: "white",
    alignItems: "center"
  },
  textWithIcon:{
    flex: 1,
    flexDirection: "row"
  },
  icon:{
    marginLeft: 10,
    marginRight: 10
  },
  switchChildButtonText: {
    fontSize: 15,
    color: 'black'
  },
  nameContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  name:{
    fontSize: 22
  },
  childInfo: {
    height: 75,
    alignSelf: 'stretch'
  },
  text: {
    marginTop: 10,
    height: 60,
    paddingTop:20,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    alignSelf: "center"
  },
  photo: {
    height: 150,
    width: 150,
    marginTop:40,
    borderRadius: 75,
  },
  profileButton: {
    height: 50,
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 40,
    marginBottom: 20
  },
  logOutButton: {
    height: 20,
    width: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bddfeb',
    borderRadius: 10,
    marginBottom: 20
  },
  signOutButtonText: {
    fontSize: 15,
    color: 'white',
  }
});
