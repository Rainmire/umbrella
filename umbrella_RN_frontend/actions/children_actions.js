import { receiveUsers } from './user_actions';

export const RECEIVE_CHILDREN = "RECEIVE_CHILDRENIDS";
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
  console.log("hi");
  fetch(`http://localhost:3000/api/children/${childId}`, {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then((payload) => {
    console.log(payload);
    dispatch(receiveUsers(payload.teacher));
    // dispatch(receiveCurrentChild(payload));
  });

};
