export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_MARKEDDATES = "RECEIVE_MARKEDDATES";


export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveMarkedDates = (markedDates) => ({
  type: RECEIVE_MARKEDDATES,
  markedDates
});

export const fetchEvents = (date,token) => dispatch => (
  fetch(`http://localhost:3000/api/daily_events`,{
    method:'GET',
    headers: { 'Authorization': token },
    body: date
  }).then(({_bodyInit})=>{
    dispatch(receiveEvents(JSON.parse(_bodyInit)));
  })
);

export const fetchMarkedDates = (month,token) => dispatch => (
  fetch(`http://localhost:3000/api/daily_events`,{
    method:'GET',
    headers: { 'Authorization': token },
    body: month
  }).then(({_bodyInit})=>{
    dispatch(receiveMarkedDates(JSON.parse(_bodyInit)));
  })
);
