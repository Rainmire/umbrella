import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/user_actions';
import GoogleLogin from './googlelogin';

const mapSTPs = (state) => ({
  currentChild: state.currentChild
});

const mapDTPs = dispatch => ({
  fetchCurrentUser: (token) => dispatch(fetchCurrentUser(token))
});

export default connect(mapSTPs, mapDTPs)(GoogleLogin);
