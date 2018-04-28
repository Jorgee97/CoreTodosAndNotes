import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import CompletedTodo from '../components/CompletedTodo';
import NotesList from '../components/NotesList';
import NotesAdd from '../components/NotesAdd';

export const ListTodo = StackNavigator({
  Main: { screen: TodoList }, 
});

export const AddTodo = StackNavigator({
  Add: { screen: TodoAdd },
});

export const TodoCompleted = StackNavigator({
  Completed: { screen: CompletedTodo },
});

export const ListNotes = StackNavigator({
  Notes: { screen: NotesList },
});

export const AddNote = StackNavigator({
  AddNotes: { screen: NotesAdd },
});