import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({},state,action.users);
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
