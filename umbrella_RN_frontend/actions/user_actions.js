import { receiveChildren, receiveCurrentChild } from './children_actions';
import { receiveMoments } from './moment_actions';

export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response);
    dispatch(receiveChildren(response.children));
    dispatch(receiveUsers(response.users));
    dispatch(receiveMoments(response.moments));
    dispatch(receiveCurrentChild(response.children[0]));
  });
};



//
