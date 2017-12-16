import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  FlatList,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={30} color="#00F" />
    )
  };
// { item }
  _renderItem = () => (
    <View style={styles.moments_container}>
      <View style={styles.image_container}>
        <Image
          source={{ uri: "https://www.security-camera-warehouse.com/images/profile.png" }}
          style={styles.profile_pic}
        />
      </View>
      <View style={styles.moment}>
        <Text style={styles.name}>Ms. Teacher</Text>
        <Text style={styles.moment_body}>This is the moment body.</Text>
        <Image
          source={{ uri: "https://www.security-camera-warehouse.com/images/profile.png" }}
          style={styles.moments_image}
        />
        <Text style={styles.footer_info}>timestamp & privacy</Text>
      </View>
    </View>
  )

  _addMoment = () => (
    this.props.navigation.navigate('MomentForm')
  )

  _addMomentButton = () => {
// change condition to check whether currentUser is teacher
    if (true) {
      return (
        <View style={styles.addMomentContainer}>
          <TouchableOpacity
            onPress={this._addMoment}
            style={styles.addMoment}
            >
            <Icon name='plus' size={50} color='#000' />
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    console.log('MOMENTS: ', this.props)
    return (
      <View>
        {this._addMomentButton()}
        {this._renderItem()}
      </View>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({
  moments_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 25,
    // borderWidth: 1,
  },
  profile_pic: {
    height: 50,
    width: 50,
    marginTop: 20,
  },
  moment: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  moment_body: {
    marginBottom: 20,
  },
  moments_image: {
    height: 100,
    width: 150
  },
  image_container: {
    marginLeft: 15,
  },
  footer_info: {
    fontSize: 12,
    marginTop: 5,
  },
  addMoment: {
    backgroundColor: 'pink',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMomentContainer: {
    backgroundColor: 'yellow',
    marginTop: 20,

  }
});
