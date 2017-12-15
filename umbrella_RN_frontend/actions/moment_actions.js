export const RECEIVE_MOMENTS = "RECEIVE_MOMENTS";

export const receiveMoments = (moments) => ({
  type: RECEIVE_MOMENTS,
  moments
});

export const fetchMoments = (childId,token) => {
  // fetch('http://localhost:3000/api/user', {
  //   method: 'GET',
  //   headers: { 'Authorization': token }
  // }).then(({_bodyInit}) => {
  //
  //
  // });
};
