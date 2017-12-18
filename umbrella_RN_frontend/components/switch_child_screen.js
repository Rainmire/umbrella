import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
// import styles from '../stylesheets/switch_child_screen';


class SwitchChildScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={30} color="#00F" />
    )
  };

  _renderItem = ({ item }) => {
    return(
      <TouchableOpacity
        onPress={ () => {
          AsyncStorage.getItem('token')
            .then( (res) => this.props.fetchChildInfo(item.id, res))
            .then( () => this.props.receiveCurrentChild(item))
            .then(this.props.navigation.navigate('ProfileScreen'))
        }}
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
          data={ this.props.children }
          keyExtractor={(item) => item.id }
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
