import React from 'react';
import { StyleSheet, ScrollView,View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda, LocaleConfig } from 'react-native-calendars';
// import AgendaScreen from './agenda';

class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="calendar" size={30} color="#00adf5" />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      events: {
        '2017-05-01': [{name: "school closed for teacher's conference"}],
        '2017-05-02': [{name: "school closed for teacher's conference"}],
         '2017-05-03': [{name: "John's birthday, Happy Birthday, John!"}, {name:"Afternoon open house"}],
         '2017-05-04': [],
         // '2017-05-04': [{name: 'item 3 - any js object'},{name: 'item 4 - any js object'},{name: 'item 4 - any js object'},{name: 'item 4 - any js object'}],
         // '2017-05-05': [{name: 'item 3 - any js object'},{name: 'item 4 - any js object'}],
         // '2017-05-06': [{name: 'item 3 - any js object'},{name: 'item 4 - any js object'}],
      },
      markedDates:{
        '2017-05-01': {dots: [{key:'closed', color: 'red'},{key:'school event', color:'pink'}]},
        '2017-05-02': {dots: [{key:'closed', color: 'red'}]},
      }
    };
  }
  renderItem(item) {
    return (
      <View style={[styles.item]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  onDayPress(){
    return (day) =>{
      console.log(day);
      if(this.props.events.length !== 0){

        let dailyEvents = this.props.events[day.dateString];
        this.setState({[day.dateString]:dailyEvents})
      }
    }
  }

  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }if(mm < 10){
      mm = '0' + mm;
    }
    var today = `${yyyy}-${mm}-${dd}`;
    console.log(today);
    return(
      <View style={{ paddingTop: 50, flex: 1 }}>
        <Agenda
          items={this.state.events}
          loadItemsForMonth={(day)=>{console.log(day);}}
          selected={today}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          onDayPress = {this.onDayPress()}
          markingType={'multi-dot'}
          markedDates={this.state.markedDates}
          theme={{
            // backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          />

      </View>
    );
  }
}
// markedDates={{
//    '2017-05-08': {textColor: '#666'},
//    '2017-05-09': {textColor: '#666'},
//    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
//    '2017-05-21': {startingDay: true, color: 'blue'},
//    '2017-05-22': {endingDay: true, color: 'gray'},
//    '2017-05-24': {startingDay: true, color: 'gray'},
//    '2017-05-25': {color: 'gray'},
//    '2017-05-26': {endingDay: true, color: 'gray'}}}
// monthFormat={'yyyy'}
// theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
//renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}

// markingType={'period'}
// LocaleConfig.defaultLocale = 'fr';

// <View>
//   <Text style={styles.calendar}>
//      You are now on the calendar view page.
//   </Text>
// </View>
export default CalendarScreen;

// export const styles = StyleSheet.create({
//   calendar: {
//     margin: 50,
//   },
// });
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height:60
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
