import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({},state,{[action.user.id]:action.user});
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

export default usersReducer;
