import { connect } from 'react-redux';
import { fetchChildInfo } from '../actions/user_actions';
import ProfileSreen from './profile_screen';

const mapSTPs = (state) => ({
  children: state.children,

});

const mapDTPs = dispatch => ({
  fetchChildInfo: (child_id,token) => dispatch(fetchChildInfo(child_id,token))
});

export default connect(null, mapDTPs)(ProfileSreen);
