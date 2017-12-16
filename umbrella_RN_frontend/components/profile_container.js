import { connect } from 'react-redux';
import { logoutUser } from '../actions/session_actions';
import ProfileSreen from './profile_screen';

const mapSTPs = ({entities, session}) => ({
  currentUser: session.currentUser,
  currentChild: entities.currentChild,
  teacher: Object.keys(entities.currentChild).length === 0? {}:entities.users[entities.currentChild.teacher_id]
});

const mapDTPs = dispatch => ({
  logoutUser: (token) => dispatch(logoutUser(token))
});

export default connect(mapSTPs, mapDTPs)(ProfileSreen);
