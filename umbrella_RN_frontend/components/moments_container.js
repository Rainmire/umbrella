import { connect } from 'react-redux';
import { fetchChildInfo } from '../actions/children_actions';
import Moments from './moments_screen';

const mapSTPs = (state) => ({
  currentChildId: state.currentChildId,
  moments: state.moments
});

const mapDTPs = dispatch => ({
  fetchChildInfo: (childId,token) => dispatch(fetchChildInfo(childId,token))
});

export default connect(mapSTPs, mapDTPs)(Moments);
