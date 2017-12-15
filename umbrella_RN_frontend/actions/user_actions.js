export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";

export const RECEIVE_USER = "RECEIVE_USER";

import { fetchChildInfo, receiveChildren, receiveCurrentChildId } from './children_actions';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    const currentChildId = Object.keys(response.children)[0];
    dispatch(receiveCurrentChildId(currentChildId));
    dispatch(fetchChildInfo(currentChildId,token));
    dispatch(receiveChildren(response.children));
    dispatch(receiveUser(response.user));
  });
};



//
