export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";
export const RECEIVE_NEW_MOMENTS = "RECEIVE_NEW_MOMENTS";
export const RECEIVE_MORE_MOMENTS = "RECEIVE_MORE_MOMENTS";

export const receiveMoments = (moments) => ({
  type: RECEIVE_MOMENTS,
  moments
});

export const receiveMoreMoments = (moments) => ({
  type: RECEIVE_MORE_MOMENTS,
  moments
});

export const receiveNewMoments = (moments) => ({
  type: RECEIVE_NEW_MOMENTS,
  moments
});

export const fetchMoments = (type,who,token,MomentId) => dispatch => (
  // fetch(`https://umbrella-server.herokuapp.com/api/children/${who}/${type}_moments/${MomentId}`, {
  fetch(`http://localhost:3000/api/${who}/${type}_moments${MomentId}`,{
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    if(type === "new"){
      return dispatch(receiveNewMoments(JSON.parse(_bodyInit).moments));
    }else{
      return dispatch(receiveMoreMoments(JSON.parse(_bodyInit).moments));
    }
  })
);
