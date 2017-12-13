import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="calendar" size={30} color="#00F" />
    )
  };

  render() {
    return(
      <View>
        <Text style={styles.calendar}>
           You are now on the calendar view page.
        </Text>
      </View>
    );
  }
}

export default CalendarScreen;

export const styles = StyleSheet.create({
  calendar: {
    margin: 50,
  },
});
