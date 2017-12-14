import { RECEIVE_CHILDREN } from '../actions/children_actions';
import merge from 'lodash/merge';


const childrenReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHILDREN:
      return action.children;
    // case RECEIVE_PIC:
    //   return merge({},state,{[action.picture.id]:action.picture});
    // case REMOVE_PIC:
    //   const newState = merge({},state);
    //   delete newState[action.picId];
    //   return newState;
    default:
      return state;
  }
};

export default childrenReducer;
