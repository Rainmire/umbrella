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
  }

  // static navigationOptions = {
  //   tabBarLabel: 'Profile',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Icon name="user" size={30} color="#00F" />
  //   )
  // }

  // componentWillMount() {
  //   // this.setState({ currentChild: [this.state.children[0]] });
  // }


  _switchChild (){
    this.props.navigation.navigate('ProfileScreen');
  }

// wrap this item in  TouchableOpacity tag so the whole index item is
// is clickable, and will navigate to the child's profile page, and will
// fetc all the data associated with that child from the store
  _renderItem ({ item }){
    return(
      <TouchableOpacity
        onPress={this._switchChild}
        style={styles.switchChildContainer}>
        <View>
          <Image
            source={{ uri: `${item.image_url}` }}
            style={{height: 50, width: 50}}
            />
        </View>
        <View>
          <Text>{`${item.name}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={ this.state.children }
          keyExtractor={(x, i) => i }// change to the id
          renderItem={ this._renderItem }
        ></FlatList>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  switchChildContainer: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
  }
});

export default SwitchChildScreen;

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
//     id: 3,
//     name: 'May',
//     image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
//   }, {
//     id: 7,
//     name: 'April',
//     image_url: 'https://www.security-camera-warehouse.com/images/profile.png'
//   }],
//   currentChild: null
// }
