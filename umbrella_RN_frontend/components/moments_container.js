import { connect } from 'react-redux';
import { fetchNewMomentsForChild, fetchNewMomentsForTeacher } from '../actions/moment_actions';
import Moments from './moments_screen';

const mapSTPs = ({entities, session}) => ({
  currentChild: entities.currentChild,
  currentUser: session.currentUser,
  moments: entities.moments
});

const mapDTPs = dispatch => ({
  fetchNewMomentsForChild: (firstmomentsId,childId,token) =>{
     dispatch(fetchNewMomentsForChild(firstmomentsId,childId,token));},
  fetchNewMomentsForTeacher: (firstmomentsId,token) => {
    dispatch(fetchNewMomentsForTeacher(firstmomentsId,token));}
});

export default connect(mapSTPs, mapDTPs)(Moments);
