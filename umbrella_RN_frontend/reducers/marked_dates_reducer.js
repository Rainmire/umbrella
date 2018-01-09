import { RECEIVE_MARKEDDATES } from '../actions/calendar_actions';
import merge from 'lodash/merge';


const markedDatesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MARKEDDATES:
      return action.markedDates.concat(state);
    default:
      return state;
  }
};

export default markedDatesReducer;
