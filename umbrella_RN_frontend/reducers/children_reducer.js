import { RECEIVE_CHILDREN } from '../actions/children_actions';
import merge from 'lodash/merge';


const childrenReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHILDREN:
      return action.children;
    default:
      return state;
  }
};

export default childrenReducer;
