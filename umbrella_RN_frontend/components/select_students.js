import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class SelectStudents extends React.Component {


  render(){
    const selectedStudents = this.props.selectedStudents;

    return(
      <View>
        <Text>This is where we select which students to send to</Text>
      </View>
    );
  }
}

export default SelectStudents;
