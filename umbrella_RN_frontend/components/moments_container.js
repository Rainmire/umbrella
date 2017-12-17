import { connect } from 'react-redux';
import { fetchNewMoments } from '../actions/moment_actions';
import { fetchCurrentUser } from '../actions/user_actions';
import Moments from './moments_screen';

const mapSTPs = ({entities, session}) => ({
  currentChild: entities.currentChild,
  currentUser: session.currentUser,
  moments: entities.moments
});

const mapDTPs = dispatch => ({
  fetchNewMoments: (firstmomentsId,who,token) =>{
     dispatch(fetchNewMoments(firstmomentsId,who,token));},
  fetchCurrentUser: (token) => dispatch(fetchCurrentUser(token))
});

export default connect(mapSTPs, mapDTPs)(Moments);
