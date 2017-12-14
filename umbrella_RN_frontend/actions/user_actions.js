export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";

export const RECEIVE_USERS = "RECEIVE_USERS";

import { receiveChildren, receiveCurrentChild } from './children_actions';


const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const a = JSON.parse(_bodyInit);
    dispatch(receiveCurrentChild(a.children[Object.keys(a.children)[0]]));
    dispatch(receiveChildren(a.children));
    dispatch(receiveUsers(a.user));
  });
};



//
