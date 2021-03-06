import { RECEIVE_EVENTS} from '../actions/calendar_actions';
import merge from 'lodash/merge';


const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge({},state,action.events);
    default:
      return state;
  }
};

export default eventsReducer;
