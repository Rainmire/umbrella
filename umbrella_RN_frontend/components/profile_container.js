import { connect } from 'react-redux';
import { logoutUser } from '../actions/session_actions';
import ProfileSreen from './profile_screen';

const mapSTPs = (state) => ({
  // console.log(`this is profile:${state.currentChild}`);
  currentChild: state.currentChild,
  // teacher: state.users[state.currentChild.teacher_id]
});

const mapDTPs = dispatch => ({
  logoutUser: (token) => dispatch(logoutUser(token))
});

export default connect(mapSTPs, mapDTPs)(ProfileSreen);
