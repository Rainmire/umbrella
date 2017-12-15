import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/user_actions';
import GoogleLogin from './googlelogin';

const mapSTPs = ({entities}) => ({
  currentChild: entities.currentChild
});

const mapDTPs = dispatch => ({
  fetchCurrentUser: (token) => dispatch(fetchCurrentUser(token))
});

export default connect(mapSTPs, mapDTPs)(GoogleLogin);
