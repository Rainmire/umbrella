import { connect } from 'react-redux';
// import { fetchCurrentUser } from '../actions/user_actions';
import LoginForm from './login_form';

const mapSTPs = (state, { navigation }) => ({
  navigation: navigation
});

const mapDTPs = dispatch => ({

});

export default connect(mapSTPs, mapDTPs)(LoginForm);
