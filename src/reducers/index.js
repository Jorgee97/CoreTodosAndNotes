import { combineReducers } from 'redux';
// Import reducers from the file
import NavReducer from './NavReducer.js';
import TodoReducer from './TodoReducer';
import AuthReducer from './AuthReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
  todo: TodoReducer,
  auth: AuthReducer,
});

export default AppReducer;