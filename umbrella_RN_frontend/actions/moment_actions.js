export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";
export const RECEIVE_NEW_CREATED_MOMENT = "RECEIVE_NEW_CREATED_MOMENT";
export const RECEIVE_MORE_MOMENTS = "RECEIVE_MORE_MOMENTS";

export const receiveMoments = (moments) => ({
  type: RECEIVE_MOMENTS,
  moments
});

export const receiveMoreMoments = (moments) => ({
  type: RECEIVE_MORE_MOMENTS,
  moments
});

export const receiveNewCreatedMoment = (moment) => ({
  type: RECEIVE_NEW_CREATED_MOMENT,
  moment
});

export const fetchMoments = (type,who,token,MomentId) => dispatch => (
  // fetch(`https://umbrella-server.herokuapp.com/api/children/${who}/${type}_moments/${MomentId}`, {
  fetch(`http://localhost:3000/api/${who}/${type}_moments${MomentId}`,{
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    if(type === "new"){
      return dispatch(receiveMoments(JSON.parse(_bodyInit).moments));
    }else{
      return dispatch(receiveMoreMoments(JSON.parse(_bodyInit).moments));
    }
  })
);

export const createMoment = (post,token) => dispatch => (
  fetch(`http://localhost:3000/api/moments`,{
    method: 'POST',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    console.log('in the createMoment action: ', post);
    console.log('in the createMoment action now: ', _bodyInit);
    console.log('in the createMoment action nowparse: ', JSON.parse(_bodyInit).moment);
    dispatch(receiveNewCreatedMoment(JSON.parse(_bodyInit).moment));
  })
);
