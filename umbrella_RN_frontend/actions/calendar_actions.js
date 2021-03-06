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

export const fetchCalendar = (date,token) => dispatch => {
  return fetch('http://localhost:3000/api/calendar/monthly_events',{
    method:'POST',
    headers: { 'Authorization': token },
    body: date
  }).then(({_bodyInit})=>{
    let response = JSON.parse(_bodyInit);
    let events = response.events;
    dispatch(receiveEvents(events));
    // dispatch(receiveMarkedDates(JSON.parse(_bodyInit.markedDates)));
  });
};
