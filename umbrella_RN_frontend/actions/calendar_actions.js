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

export const fetchCalendar = (date,token) => dispatch => (
  fetch(`http://localhost:3000/api/daily_events`,{
    method:'GET',
    headers: { 'Authorization': token },
    body: date
  }).then(({_bodyInit})=>{
    console.log(JSON.parse(_bodyInit));
    // dispatch(receiveEvents(JSON.parse(_bodyInit.events)));
    // dispatch(receiveMarkedDates(JSON.parse(_bodyInit.markedDates)));
  })
);
