import { connect } from 'react-redux';
import { fetchChildInfo } from '../actions/children_actions';
import Moments from './moments_screen';

const mapSTPs = ({entities, session}) => ({
  currentChild: entities.currentChild,
  currentUser: session.currentUser,
  moments: entities.moments
});

const mapDTPs = dispatch => ({
  fetchChildInfo: (childId,token) => dispatch(fetchChildInfo(childId,token))
});

export default connect(mapSTPs, mapDTPs)(Moments);
