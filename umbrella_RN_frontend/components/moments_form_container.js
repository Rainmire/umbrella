import { connect } from 'react-redux';
import { createMoment } from '../actions/moment_actions';

import MomentForm from './moment_form';

const mapSTPs = ({entities}) => ({
  students: entities.children
});

const mapDTPs = dispatch => ({
  createMoment: (moment, token) => dispatch(createMoment(moment, token)),
});

export default connect(mapSTPs, mapDTPs)(MomentForm);
