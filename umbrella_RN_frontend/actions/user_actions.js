export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";
export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";
export const RECEIVE_USERS = "RECEIVE_USERS";

import { receiveChildren } from './children_actions';


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
    // fetchChildInfo(Object.keys(a.children)[0],token);
    dispatch(receiveChildren(a.children));
    dispatch(receiveUsers(a.user));
  });

};


// export const fetchChildInfo = (child_id,token) => (dispatch) => {
//   fetch('http://localhost:3000/api/children/child_id', {
//     method: 'GET',
//     headers: { 'Authorization': token }
//   }).then((payload) => dispatch(receiveChildInfo(payload)));
// };
//
export const fetchMoments = (child_id,token) => {

};
