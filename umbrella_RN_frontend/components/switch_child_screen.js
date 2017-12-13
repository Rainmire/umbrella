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
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';


class SwitchChildScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      children: [{
        id: 3,
        name: 'May',
        image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
      }, {
        id: 7,
        name: 'April',
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

  componentWillMount() {
    this.setState({ currentChild: [this.state.children[0]] });

  }

  fetchData = async () => {
    const response = await fetch('/api/user')
      .then(e => console.error(e));
    const json = response.json();
    this.setState({ children: json.results });
  }

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
        { this._renderLogOutButton() }
      </View>
    );
  }
}

export const styles = StyleSheet.create({

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
