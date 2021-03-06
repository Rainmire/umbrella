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

// do we need a body for the post?
export const createMoment = (moment,token) => dispatch => {
  console.log('in action ', moment);
  console.log('in action ', token);


  fetch('http://localhost:3000/api/moments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({moment})
  }).then(({_bodyInit}) => {
      dispatch(receiveNewCreatedMoment(JSON.parse(_bodyInit).moment));
    });

  // fetch(`http://localhost:3000/api/moments`,{
  //   method: 'POST',
  //   headers: { 'Authorization': token },
  //   body: moment,
  // }).then( (res) => console.log('here is the response in the action: ', res))

// .then(({_bodyInit}) => {
//     dispatch(receiveNewCreatedMoment(JSON.parse(_bodyInit).moment));
//   });
//   console.log('in create moment action before fetch', moment);
//   console.log('token', token);
};

// // debugger
// console.log('in the createMoment action: ', moment);
// console.log('in the createMoment action now body init: ', _bodyInit);
// console.log('in the createMoment action nowparse: ', JSON.parse(_bodyInit).moment);
