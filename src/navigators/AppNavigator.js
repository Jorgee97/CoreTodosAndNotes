import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import Splash from '../components/Splash';
import DrawerContainer from '../components/DrawerContainer';
import { addListener } from '../utils/redux';
import { ListTodo, AddTodo, TodoCompleted, ListNotes, AddNote } from '../utils/Stacks';

const AuthAppScreens = StackNavigator({
  Splash: { screen: Splash },
  Login: { screen: LoginForm },
  Register: { screen: RegisterForm },
});

const DrawerMenu = DrawerNavigator({
 Main: { screen: ListTodo },
 Add: { screen:  AddTodo },
 Completed: { screen: TodoCompleted },
 Notes: { screen: ListNotes },
 AddNote: { screen: AddNote },
},
{
  contentComponent: DrawerContainer,
});

export const AppNavigator = StackNavigator({
  AuthScreen: { screen: AuthAppScreens },
  AppNav: { screen: DrawerMenu },
},
{
  headerMode: 'none',
});

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch, 
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);