import axios from 'axios';
import { API_TODO } from '../utils/types';
import { NavigationActions } from 'react-navigation';

export const TodoChangeText = (text) => {
  return {
    type: 'TODO_CHANGED_TEXT',
    payload: text
  };
};

export const TodoAddText = (token, text, iduser) => {
  return (dispatch) => {
    axios.post(API_TODO + 'createTodo', {
      iduser: iduser,
      text: text,
      token: token,
    })
    .then(response => {
      if (response.data.added)
      {
        dispatch({ type: 'TODO_ADD' });
        dispatch(NavigationActions.navigate({
          routeName: 'Main'
       }));
      }
    })
    .catch(error => console.log(error));
  }
};

export const TodoLoad = (token) => {
  return (dispatch) => {
    axios.post(API_TODO + 'retrieveTodoPerUser', {
      token: token
    })
    .then(response => {
      if (response.length != 0) {
        dispatch({
          type: 'TODOS_USER',
          payload: {
            todoData: response.data
          }
        });
      }
    })
    .catch((error) => console.log(error));
  }
};

export const TodoLoadCompleteOnly = () => {
  return {
    type: 'TODO_LIST_COMPLETED_ONLY'
  };
};

export const TodoDelete = (idtodos, token) => {
  return (dispatch) => {
    axios.post(API_TODO + 'todoDelete', {
      idtodos: idtodos,
      token: token
    })
    .then(response => {
      dispatch({
        type: 'REMOVE_TODO',
        payload: idtodos
      });
    })
    .catch((error) => alert("Ups! the server have reported an error, please try again."));
  }
};

export const TodoComplete = (idtodos, token, completed) => {
  return (dispatch) => {
    axios.post(API_TODO + 'todoState', {
      completed: completed,
      idtodos: idtodos,
      token: token
    })
    .then(response => {
      dispatch({
        type: 'TODO_COMPLETE',
        payload: idtodos
      });
    })
    .catch((error) => console.log(error));
  }
};


