import { connect } from 'react-redux';
import fetchEvents from '../actions/calendar_actions';

import CalendarScreen from './calendar_screen';

const mapSTPs = ({entities}) => ({
  events: entities.events,
  markedDates: entities.markedDates
});

const mapDTPs = (dispatch) => ({
  fetchEvents: (date, token)=> dispatch(fetchEvents(date, token))
});

export default connect(mapSTPs, mapDTPs)(CalendarScreen);
