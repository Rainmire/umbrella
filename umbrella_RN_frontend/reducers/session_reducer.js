import merge from "lodash/merge";

const INITIAL_STATE = {
  email: '',
  password: '',
  authentication_token: '',
  username: '',
  errorFlag: false,
  spinner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return merge({},state,{email: action.email});
    case 'PASSWORD_CHANGED':
      return merge({},state,{password: action.password});
    case 'LOGIN_FAILED':
      return merge({},state,{errorFlag: true, password: '', spinner: false });
    case 'LOGIN_USER_SUCCESS':
      return merge({},state, action.payload, INITIAL_STATE);
    case 'LOAD_SPINNER':
      return merge({},state,{spinner: true});
    default:
      return state;
  }
};
