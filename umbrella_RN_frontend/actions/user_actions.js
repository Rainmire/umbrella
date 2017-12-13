export const RECEIVE_INFO = "RECEIVE_INFO";
export const RECEIVE_CHILDRENIDS = "RECEIVE_CHILDRENIDS";
export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";

const receiveChildrenIds = (children) => ({
  type: RECEIVE_CHILDRENIDS,
  children
});

const receiveInfo = (payload) => ({
  type: RECEIVE_INFO,
  payload
});


export const fetchCurrentUser = (token) => (dispatch) => {
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({children}) => dispatch(receiveChildrenIds(children)));
};

export const fetchInfo = (child_id,token) => (dispatch) => {
  fetch('http://localhost:3000/api/children/child_id', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then((payload) => dispatch(receiveChildrenIds(payload)));
};

export const fetchMoments = (child_id) => {

};
