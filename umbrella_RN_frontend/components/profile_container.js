import { connect } from 'react-redux';
import { logoutUser } from '../actions/session_actions';
import ProfileSreen from './profile_screen';

const mapSTPs = ({entities}) => {
console.log('entities', entities);
  return ({
  // console.log(`this is profile:${state.currentChild}`);
  currentChild: entities.currentChild,
  children: entities.children,
  teacher: entities.users[entities.currentChild.teacher_id]
});
};

const mapDTPs = dispatch => ({
  logoutUser: (token) => dispatch(logoutUser(token))
});

export default connect(mapSTPs, mapDTPs)(ProfileSreen);
