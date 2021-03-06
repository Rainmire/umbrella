import { RECEIVE_MARKEDDATES } from '../actions/calendar_actions';
import merge from 'lodash/merge';


const markedDatesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MARKEDDATES:
      return merge({},state,action.markedDates);
    default:
      return state;
  }
};

export default markedDatesReducer;
