export const emailChanged = (email) => ({
    type: 'EMAIL_CHANGED',
    email
  });

export const passwordChanged = (password) => ({
    type: 'PASSWORD_CHANGED',
    password
  });

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('https://umbrella-server.herokuapp.com/token', {
    // fetch('http://localhost:3000/token', {

        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          }
        })
      }).then((response) => {
        console.log(response);
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');
          response.json().then(data => {
            console.log(data);
            dispatch({
              type: 'LOGIN_USER_SUCCESS',
              payload: data
            });
          });
        }
      });
  };
};
//
export const logoutUser = (token) => (dispatch) => (
  fetch('https://umbrella-server.herokuapp.com/api/session', {
  // fetch('http://localhost:3000/api/session', {

    method: 'DELETE',
    headers: { 'Authorization': token }
  }).then(()=>{
    dispatch(logout());
  })
);

const logout = () => ({
  type: LOGOUT
});

export const LOGOUT = "LOGOUT";
