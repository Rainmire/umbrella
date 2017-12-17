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

export const fetchMoments = (childId,token) => {
  // fetch('https://umbrella-server.herokuapp.com/api/user', {
  //   method: 'GET',
  //   headers: { 'Authorization': token }
  // }).then(({_bodyInit}) => {
  //
  //
  // });
};
