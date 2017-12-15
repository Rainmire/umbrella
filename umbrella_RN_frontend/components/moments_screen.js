import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class MomentsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Moments',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={30} color="#00F" />
    )
  };

  render() {
    console.log(this.props)
    return (
      <View>
        <Text style={styles.moments}>
          This is the Moments screen.
          This will display an index of messages to the user, posted by the teachers/ admin.
        </Text>

      </View>
    );
  }
}

export default MomentsScreen;

export const styles = StyleSheet.create({
  moments: {
    margin: 50,
  },
});
