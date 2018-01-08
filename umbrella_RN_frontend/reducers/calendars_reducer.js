import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import markedDatesReducer from './marked_dates_reducer';

export default combineReducers({
  events: EventsReducer,
  markedDates: markedDatesReducer,
});
