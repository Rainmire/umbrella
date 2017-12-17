import { connect } from 'react-redux';
import { fetchChildInfo, receiveCurrentChild } from '../actions/children_actions';
import SwitchChildScreen from './switch_child_screen';

const mapSTPs = ({entities, session}) => ({
  currentUser: session.currentUser,
  children: entities.children
});

const mapDTPs = dispatch => ({
  fetchChildInfo: (childId,token) => dispatch(fetchChildInfo(childId,token)),
  receiveCurrentChild: (child) => dispatch(receiveCurrentChild(child))
});

export default connect(mapSTPs, mapDTPs)(SwitchChildScreen);
