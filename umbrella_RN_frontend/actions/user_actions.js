export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";
export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";
export const RECEIVE_USER = "RECEIVE_USER";

import { receiveChildren } from './children_actions';


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const a = JSON.parse(decodeURI(_bodyInit));
    // fetchChildInfo(Object.keys(children)[0],token);
    dispatch(receiveChildren(a.children));
    dispatch(receiveUser(a.users));
  });

};


export const fetchChildInfo = (child_id,token) => (dispatch) => {
  fetch('http://localhost:3000/api/children/child_id', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then((payload) => dispatch(receiveChildInfo(payload)));
};

export const fetchMoments = (child_id,token) => {

};
