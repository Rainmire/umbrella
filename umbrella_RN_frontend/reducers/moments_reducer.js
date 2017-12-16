import { RECEIVE_MOMENTS } from '../actions/moment_actions';
import merge from 'lodash/merge';


const childrenReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOMENTS:
      return action.moments;
    default:
      return state;
  }
};

export default childrenReducer;
