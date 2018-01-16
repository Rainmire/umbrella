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
  console.log(date);
  return fetch('http://localhost:3000/api/calendar/monthly_events',{
    method:'POST',
    headers: { 'Authorization': token },
    body: JSON.stringify({date: date})
  }).then((rep)=>{
    console.log(JSON.parse(rep));
    // dispatch(receiveEvents(JSON.parse(_bodyInit.events)));
    // dispatch(receiveMarkedDates(JSON.parse(_bodyInit.markedDates)));
  });
};
