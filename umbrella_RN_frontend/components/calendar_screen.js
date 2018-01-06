import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';


class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="calendar" size={30} color="#00F" />
    )
  };

  render() {
    return(
      <View style={{ paddingTop: 50, flex: 1 }}>
        <Calendar
          current={'2018-01-01'}
          minDate={'2017-12-10'}
          maxDate={'2017-12-30'}
          onDayPress={(day) => {console.log('selected day', day)}}
          monthFormat={'yyyy MM'}
          onMonthChange={(month) => {console.log('month changed', month)}}
          hideArrows={false}
          // renderArrow={(direction) => (<Arrow />)}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
        />
      </View>
    );
  }
}

// <View>
//   <Text style={styles.calendar}>
//      You are now on the calendar view page.
//   </Text>
// </View>
export default CalendarScreen;

export const styles = StyleSheet.create({
  calendar: {
    margin: 50,
  },
});
