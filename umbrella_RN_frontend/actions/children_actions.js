import { receiveUser } from './user_actions';
import { receiveMoments } from './moment_actions';

export const RECEIVE_CHILDREN = "RECEIVE_CHILDREN";
export const RECEIVE_CURRENT_CHILD = "RECEIVE_CURRENT_CHILD";

export const receiveChildren = (children) => ({
  type: RECEIVE_CHILDREN,
  children
});

export const receiveCurrentChild = ( child ) => ({
  type: RECEIVE_CURRENT_CHILD,
  child
});


export const fetchChildInfo = (childId,token) => (dispatch) => {
  fetch(`https://umbrella-server.herokuapp.com/api/children/${childId}`, {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response);
    dispatch(receiveMoments(response.moments));
  });
};
