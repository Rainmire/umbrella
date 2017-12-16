export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";

export const RECEIVE_USERS = "RECEIVE_USERS";

import { fetchChildInfo, receiveChildren, receiveCurrentChild } from './children_actions';


export const receiveUsers = (users) => ({
  type: RECEIVE_USER,
  users
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response);
    console.log(`Response:${response.children}`);
    dispatch(receiveChildren(response.children));
    dispatch(receiveUsers(response.users));
    const currentChild = response.children[0];
    if
    dispatch(receiveCurrentChild(currentChild));
    dispatch(fetchChildInfo(currentChild.id,token));
  });
};



//
