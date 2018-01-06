import { connect } from 'react-redux';
import createMoment from '../actions/moment_actions';

import MomentsForm from './moments_form';

const mapSTPs = ({entities}) => ({
  students: entities.children
});

const mapDTPs = (dispatch) => ({

});

export default connect(mapSTPs, mapDTPs)(MomentsForm);
