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
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={30} color="#00F" />
    )
  }
  constructor(props) {
    super(props);

    // this.state = {
    //   currentChild: this.props.currentChild,
    //   teacher: this.props.teacher,
    //   children: this.props.children,
    //   currentUser: this.props.currentUser
    // }
  }


  componentWillMount() {
    console.log('will mount props: ', this.props);

  }

  componentDidMount() {
    console.log('mounted props: ', this.props);
  }

  componentWillReceiveProps() {
    console.log('will receive props: ', this.props);
    // console.log(this.props.teacher);
  }

  // fetchData = async () => {
  //   const response = await fetch('/api/user')
  //     .then(e => console.error(e));
  //   const json = response.json();
  //   this.setState({ children: json.results });
  // }


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
    this.props.navigation.navigate('SwitchChild', {children: this.props.children})
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


  _renderItem = ( teacher ) => {

    // console.log('destructured props: ', props);
    // console.log('here is the state: ', this.state)
    const currentChild = this.props.currentChild
    // const currentTeacher = this.props.teacher
    // console.log(currentChild);
    //
    // console.log(this.props.teacher);
    // console.log(this.props.currentUser);
    // console.log(this.props.children);
    console.log('teacher renderItem: ', teacher.name)
    // console.log('typeof teacher renderItem: ', typeof currentTeacher)
    // console.log(currentTeacher.name)
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
            <Text style={styles.text}>Name:   {`${this.props.currentChild.name}`}</Text>
            <Text style={styles.text}>Class:   {`${this.props.teacher}`}</Text>
          </View>
          <View style={styles.childInfo2}>
            <Text style={styles.text}>Main Teacher:   {`${this.props.teacher}`}</Text>
            <Text style={styles.text}>Contact:   {`${this.props.teacher}`}</Text>
          </View>
        </View>
      </View>
    )
  }

  showprops = (obj, objName) => {
    let result = '';
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + '=' + obj[i] + '\n';
      }
    }
    return result
  }

  render() {
    // const destTeacherName = { teacherName }
    const currentTeacher = this.props.teacher
    // console.log(this.showprops(this.props.teacher, 'teacher'));
    console.log('profile screen propssssss: ', this.props);
    // console.log('teacher name: ', destTeacherName.name);
    // console.log('profile screen props: ', this.props);
    // console.log('teacher render: ', {currentTeacher})
  // console.log('teacher render typeof: ', typeof {currentTeacher})
    // debugger
      return (
        <View style={styles.profileScreen}>

        <View>
        { this._renderItem({ currentTeacher })}
        </View>

        { this._renderSwitchChildren() }
        { this._renderLogOutButton() }
        </View>

      );
  }
}
// data={ this.props.currentChild }
// keyExtractor={(x, i) => i }
// renderItem={ this._renderItem }
// <FlatList
// data={ [this.state] }
// // extraData={this.state}
// keyExtractor={ (item) => item.id }
// renderItem={ this._renderItem }
// />


export default ProfileScreen;

export const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 50,
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
    height: 130,
    width: 300,
    flex: 1,
    flexDirection: 'column',
  },
  profileButton: {
    height: 60,
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
    height: 60,
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


// this.state= {
//   children: [{
//     // id: ,
//     name: 'May',
//     class: 'Room 24',
//     teacher: 'Ms. Lee',
//     contact: '415-213-9024',
//     image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
//   }, {
//     // id: ,
//     name: 'April',
//     class: 'Room 9',
//     teacher: 'Mr. Z',
//     contact: '415-213-9009',
//     image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
//   }],
//   currentChild: null
// }
