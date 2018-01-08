import React from 'react';
import { StyleSheet, ScrollView,View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import AgendaScreen from './agenda.js';

class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="calendar" size={30} color="#00F" />
    )
  };

  // constructor(){
  //   this.state = {
  //     selectdate = ""
  //   }
  // }

  render() {
    return(
      <ScrollView style={{ paddingTop: 50, flex: 1 }}>
        <AgendaScreen />
      </ScrollView>
    );
  }
}
// markingType={'period'}
// LocaleConfig.defaultLocale = 'fr';

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

// <Calendar
//   current={'2018-01-01'}
//   minDate={'2016-12-10'}
//   maxDate={'2019-12-30'}
//   onDayPress={(day) => {console.log('selected day', day)}}
//   monthFormat={'yyyy MM'}
//   // onMonthChange={(month) => {console.log('month changed', month)}}
//   hideArrows={false}
//   // renderArrow={(direction) => (<Arrow />)}
//   hideExtraDays={true}
//   disableMonthChange={true}
//   firstDay={1}
//   markedDates={{
//     '2018-01-11': {selected: true, marked: true, startingDay: true, color: 'orange',endingDay: true},
//     '2018-01-16': {selected: true, marked: true, color: 'blue'},
//     '2018-01-17': {textColor: 'green'},
//     '2018-01-18': {marked: true, dotColor: 'red'},
//     '2018-01-19': {disabled: true}
//   }}
//   theme={{
//     backgroundColor: '#ffffff',
//     calendarBackground: '#ffffff',
//     textSectionTitleColor: '#b6c1cd',
//     selectedDayBackgroundColor: '#00adf5',
//     selectedDayTextColor: '#ffffff',
//     todayTextColor: '#00adf5',
//     dayTextColor: '#2d4150',
//     textDisabledColor: '#d9e1e8',
//     dotColor: '#00adf5',
//     selectedDotColor: '#ffffff',
//     arrowColor: 'orange',
//     monthTextColor: 'blue',
//     // textDayFontFamily: 'monospace',
//     // textMonthFontFamily: 'monospace',
//     // textDayHeaderFontFamily: 'monospace',
//     textDayFontSize: 16,
//     textMonthFontSize: 16,
//     textDayHeaderFontSize: 16
//   }}
// />

// <Agenda
//   // the list of items that have to be displayed in agenda. If you want to render item as empty date
//   // the value of date key kas to be an empty array []. If there exists no value for date key it is
//   // considered that the date in question is not yet loaded
//   items={
//     {'2018-01-16': [{text: 'item 1 - any js object'}],
//     '2018-01-23': [{text: 'item 2 - any js object'}],
//     '2018-01-24': [],
//     '2018-01-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
//   }}
//   // callback that gets called when items for a certain month should be loaded (month became visible)
//   loadItemsForMonth={(month) => {console.log('trigger items loading')}}
//   // callback that fires when the calendar is opened or closed
//   onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
//   // callback that gets called on day press
//   onDayPress={(day)=>{console.log('day pressed')}}
//   // callback that gets called when day changes while scrolling agenda list
//   onDayChange={(day)=>{console.log('day changed')}}
//   // initially selected day
//   selected={'2018-01-16'}
//   minDate={'2016-12-10'}
//   maxDate={'2019-12-30'}
//   // Max amount of months allowed to scroll to the past. Default = 50
//   pastScrollRange={50}
//   // Max amount of months allowed to scroll to the future. Default = 50
//   futureScrollRange={50}
//   // specify how each item should be rendered in agenda
//   renderItem={(item, firstItemInDay) => {return (<View />);}}
//   // specify how each date should be rendered. day can be undefined if the item is not first in that day.
//   renderDay={(day, item) => {return (<View />);}}
//   // specify how empty date content with no items should be rendered
//   renderEmptyDate={() => {return (<View />);}}
//   // specify how agenda knob should look like
//   renderKnob={() => {return (<View />);}}
//   // specify what should be rendered instead of ActivityIndicator
//   renderEmptyData = {() => {return (<View />);}}
//   // specify your item comparison function for increased performance
//   rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
//   // Hide knob button. Default = false
//   // hideKnob={true}
//   // By default, agenda dates are marked if they have at least one item, but you can override this if needed
//   markedDates={{
//     '2018-01-16': {selected: true, marked: true},
//     '2018-01-17': {marked: true},
//     '2018-01-18': {disabled: true}
//   }}
//   // agenda theme
//   theme={{
//     // ...calendarTheme,
//     agendaDayTextColor: 'yellow',
//     agendaDayNumColor: 'green',
//     agendaTodayColor: 'red',
//     agendaKnobColor: 'orange'
//   }}
//   // agenda container style
//   style={{}}
// />
