import { combineReducers } from 'redux';
// Import reducers from the file
import NavReducer from './NavReducer.js';
import TodoReducer from './TodoReducer';
import AuthReducer from './AuthReducer';
import NotesReducer from './NotesReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
  todo: TodoReducer,
  auth: AuthReducer,
  notes: NotesReducer,
});

export default AppReducer;