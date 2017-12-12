import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Feed',
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
