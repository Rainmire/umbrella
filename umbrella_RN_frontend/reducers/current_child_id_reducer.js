import { RECEIVE_CURRENT_CHILD_ID } from '../actions/children_actions';
import merge from 'lodash/merge';


const childrenReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_CHILD_ID:
      return action.childId;
    default:
      return state;
  }
};

export default childrenReducer;
