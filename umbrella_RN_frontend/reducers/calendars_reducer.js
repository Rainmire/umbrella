import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import MarkedDatesReducer from './marked_dates_reducer';

export default combineReducers({
  events: EventsReducer,
  markedDates: MarkedDatesReducer,
});
