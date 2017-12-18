import { connect } from 'react-redux';
import SelectStudents from './select_students';

const mapSTPs = ({entities}) => ({
  students: entities.children
});

const mapDTPs = (dispatch) => ({

});

export default connect(mapSTPs, mapDTPs)(SelectStudents);
