export const fetchCurrentUser = (token)=>{
  fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: { 'Authorization': token }
  }).then((response) => console.log(response));
};
