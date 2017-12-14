export const RECEIVE_CHILD_INFO = "RECEIVE_CHILD_INFO";
export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";

import { receiveChildren } from './children_actions'; 

const receiveChildInfo = (payload) => ({
  type: RECEIVE_CHILD_INFO,
  payload
});

export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    console.log(_bodyInit);
    // fetchChildInfo(Object.keys(children)[0],token);
    // dispatch(receiveChildrenIds(children));
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
