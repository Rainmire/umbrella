import { receiveUser } from './user_actions';

export const RECEIVE_CHILDREN = "RECEIVE_CHILDREN";
export const RECEIVE_CURRENT_CHILD_ID = "RECEIVE_CURRENT_CHILD_ID";

export const receiveChildren = (children) => ({
  type: RECEIVE_CHILDREN,
  children
});

export const receiveCurrentChildId = ( childId ) => ({
  type: RECEIVE_CURRENT_CHILD_ID,
  childId
});


export const fetchChildInfo = (childId,token) => (dispatch) => {
  fetch(`http://localhost:3000/api/children/${childId}`, {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response.teacher);
    console.log(receiveUser);
    dispatch(receiveUser(response.teacher));
    // dispatch(receiveCurrentChild(payload));
  });

};
