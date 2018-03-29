import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';


export const ListTodo = StackNavigator({
  Main: { screen: TodoList }, 
});

export const AddTodo = StackNavigator({
  Add: { screen: TodoAdd },
});
