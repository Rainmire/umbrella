import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, AsyncStorage } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda, LocaleConfig } from 'react-native-calendars';
// import AgendaScreen from './agenda';

class CalendarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="calendar" size={30} color={tintColor} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {events:{}};
  }

  _getToday(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = `${yyyy}-${mm}-${dd}`;
    return today;
  }

  // componentWillReceiveProps(newProps){
  //   let today = this._getToday();
  //   let dailyEvents = newProps.events[today.dateString];
  //   this.setState({[today.dateString]:dailyEvents});
  // }


  renderItem(item) {
    return (
      <View style={[styles.item]}><Text>{item.body}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No Event Today!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  // timeToString(time) {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // }

  onDayPress(){
    return (day) =>{
      // if(this.props.events.length !== 0){
        let dailyEvents = this.props.events[day.dateString];
        if(dailyEvents === undefined){
          dailyEvents = [];
        }
        this.setState({events:{[day.dateString]:dailyEvents}});
      // }
    }
  }

  loadItemsForMonth(){
    return(day) =>{
      console.log(day);
      AsyncStorage.getItem('token').then((returntoken)=> {
        console.log(this.state);
        this.props.fetchCalendar(day.dateString,returntoken);
      });
    }
  }


  render() {
    let today = this._getToday();
    return(
      <View style={{ paddingTop: 50, flex: 1 }}>
        <Agenda
          items={this.state.events}
          loadItemsForMonth={this.loadItemsForMonth()}
          selected={today}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          onDayPress = {this.onDayPress()}
          markingType={'multi-dot'}
          markedDates={{
            '2018-01-01': {dots: [{key:'close',color:'red'}]},
            '2018-01-15': {dots: [{key:'close',color:'red'}]},
            '2018-01-16': {dots: [{key: 'school event', color:'pink'},{key: 'birthday', color:'green'}]},
          }}
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

export default CalendarScreen;

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
