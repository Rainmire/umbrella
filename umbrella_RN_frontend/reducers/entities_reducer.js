import { combineReducers } from 'redux';
import ChildrenReducer from './session_reducer';
import UserReducer from './entities_reducer';
// import errorReducer from './error_reducer';


export default combineReducers({
  children: ChildrenReducer,
  users: UserReducer,
  
});
