import { connect } from 'react-redux';
import { logoutUser } from '../actions/session_actions';
import ProfileSreen from './profile_screen';

// const mapSTPs = (state) => ({
//   children: state.children,
//
// });

const mapDTPs = dispatch => ({
  logoutUser: (token) => dispatch(logoutUser(token))
});

export default connect(null, mapDTPs)(ProfileSreen);
