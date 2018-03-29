import axios from 'axios';
import { API_TODO } from '../utils/types';
import { NavigationActions } from 'react-navigation';

export const TodoChangeText = (text) => {
  return {
    type: 'TODO_CHANGED_TEXT',
    payload: text
  };
};

export const TodoAddText = (text) => {
  return {
    type: 'TODO_ADD',
    payload: text
  };
};

export const TodoLoad = (token) => {
  return (dispatch) => {
    axios.post(API_TODO + 'retrieveTodoPerUser', {
      token: token
    })
    .then(response => {
      console.log(response);
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

export const TodoComplete = (idtodos, token, completed) => {
  alert(token);
  return (dispatch) => {
    axios.post(API_TODO + 'todoState', {
      completed: completed,
      idtodos: idtodos,
      token: token
    })
    .then(response => {
      dispatch({
        type: 'TODO_COMPLETE'
      });
    })
    .catch((error) => console.log(error));
  }
};


