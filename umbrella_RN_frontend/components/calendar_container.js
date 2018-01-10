import { connect } from 'react-redux';
import fetchCalendar from '../actions/calendar_actions';

import CalendarScreen from './calendar_screen';

const mapSTPs = ({entities}) => ({
  events: entities.calendars.events,
  markedDates: entities.calendars.markedDates
});

const mapDTPs = (dispatch) => ({
  fetchCalendar: (date, token)=> dispatch(fetchCalendar(date, token))
});

export default connect(mapSTPs, mapDTPs)(CalendarScreen);
