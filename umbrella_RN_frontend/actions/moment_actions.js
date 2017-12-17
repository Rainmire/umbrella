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


export const fetchNewMoments = (firstMomentId,who,token) => dispatch => {
  // fetch(`https://umbrella-server.herokuapp.com/api/children/${childId}/new_moments/${firstMomentId}`, {
  fetch(`http://localhost:3000/api/${who}/new_moments/${firstMomentId}`,{
    method: 'GET',
    headers: { 'Authorization': token }
  }).then(({_bodyInit}) => {
    const response = JSON.parse(_bodyInit);
    console.log(response);
    dispatch(receiveNewMoments(response.moments));
  });
};
