import { combineReducers } from 'redux';
import ChildrenReducer from './children_reducer';
import UsersReducer from './users_reducer';
import CurrentChildIdReducer from './current_child_id_reducer';
// import errorReducer from './error_reducer';


export default combineReducers({
  children: ChildrenReducer,
  users: UsersReducer,
  currentChildId: CurrentChildIdReducer
});