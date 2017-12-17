import { connect } from 'react-redux';
import { logoutUser } from '../actions/session_actions';
import ProfileSreen from './profile_screen';
//
// const mapSTPs = ({entities, session}) => ({
//   currentUser: session.currentUser,
//   currentChild: entities.currentChild,
//   children: entities.children,
//   teacher: entities.users[entities.currentChild.teacher_id]
// });
// const mapSTPs = function({entities, session}) {
// console.log('ENTITIES MSTP: ', entities);
// console.log('SESSION MSTP: ', session);
// let currentUser = session.currentUser;
// let teacher2 = entities.users[entities.currentChild.teacher_id];
// console.log(currentUser);
// console.log(teacher2);
//   return({
//     currentUser: session.currentUser,
//     currentChild: entities.currentChild,
//     children: entities.children,
//     teacher: entities.users[entities.currentChild.teacher_id]
//   });
// };

const mapSTPs = ({entities, session}) => ({
  currentUser: session.currentUser,
  currentChild: entities.currentChild,
  children: entities.children,
  teacher: Object.keys(entities.currentChild).length === 0? {}:entities.users[entities.currentChild.teacher_id]
});

const mapDTPs = dispatch => ({
  logoutUser: (token) => dispatch(logoutUser(token))
});

export default connect(mapSTPs, mapDTPs)(ProfileSreen);
