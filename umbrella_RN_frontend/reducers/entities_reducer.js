import { combineReducers } from 'redux';
import ChildrenReducer from './children_reducer';
import UsersReducer from './users_reducer';
import MomentsReducer from './moments_reducer';
import CurrentChildReducer from './current_child_reducer';
// import errorReducer from './error_reducer';


export default combineReducers({
  children: ChildrenReducer,
  users: UsersReducer,
  currentChild: CurrentChildReducer,
  moments: MomentsReducer
});
