import {
  RECEIVE_MOMENTS,
  RECEIVE_MORE_MOMENTS,
  RECEIVE_NEW_CREATED_MOMENT
} from '../actions/moment_actions';
import merge from 'lodash/merge';

const MomentsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOMENTS:
      return action.moments;
    case RECEIVE_MORE_MOMENTS:
      return state.concat(action.moments);
    case RECEIVE_NEW_CREATED_MOMENT:
      return action.moment.concat(state);
    default:
      return state;
  }
};

export default MomentsReducer;
