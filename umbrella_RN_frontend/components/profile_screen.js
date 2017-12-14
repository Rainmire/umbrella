import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onSignOut } from '../app/auth';
import styles from '../stylesheets/profile_screen';
import SwitchChildScreen from './switch_child_screen';
import navigateAction from '../navigation/router';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      children: [{
        // id: ,
        name: 'May',
        class: 'Room 24',
        teacher: 'Ms. Lee',
        contact: '415-213-9024',
        image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
      }, {
        // id: ,
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
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={30} color="#00F" />
    )
  }

  componentDidMount() {
    this.fetchData();
    this.setState({ currentChild: [this.state.children[0]] });
  }

  fetchData = async () => {
    const response = await fetch('/api/user')
      .then(e => console.error(e));
    const json = response.json();
    this.setState({ children: json.results });
  }

  _switchChild = () => (
    this.props.navigation.navigate('SwitchChild') //{children: this.state.children}
  )

  _renderSwitchChildren = () => {
    if (this.state.children.length > 1) {
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
      onPress={this.onSignOut}
      style={styles.logOutButton}
    >
      <Text style={styles.signOutButtonText}> SIGN OUT </Text>
    </ TouchableOpacity>
  )


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

  render() {
    return (
      <View style={styles.profileScreen}>
        <FlatList
          data={ this.state.currentChild }
          keyExtractor={(x, i) => i }// change to the id
          renderItem={ this._renderItem }
        ></FlatList>
        { this._renderSwitchChildren() }
        { this._renderLogOutButton() }
      </View>
    );
  }
}

export default ProfileScreen;
