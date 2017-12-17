import { receiveChildren, receiveCurrentChild } from './children_actions';
import { receiveMoments } from './moment_actions';

export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const fetchCurrentUser = (token) => (dispatch) => {
  // fetch('https://umbrella-server.herokuapp.com/api/user', {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response);
    console.log("is teacher?", Boolean(response.users[response.current_user_id].teacher_class));
    dispatch(receiveChildren(response.children));
    dispatch(receiveUsers(response.users));
    dispatch(receiveMoments(response.moments));
    const currentUser = response.users[response.current_user_id];
    if(!currentUser.teacher_class){
      console.log("is parent");
      dispatch(receiveCurrentChild(response.children[0]));
    }
    dispatch(receiveCurrentUser(currentUser));
  });
};



//
