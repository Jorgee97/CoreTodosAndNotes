import axios from 'axios';
import { API_AUTH } from '../utils/types';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

export const LoginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_LOADING' });
    axios.post(API_AUTH  + 'loginUser', {
      email: email,
      password: password
    })
    .then(response => {
      if (response.data.error) 
        dispatch({ type: 'AUTH_ERROR', payload: response.data.error });
      else {
        AsyncStorage.setItem('userToken', response.data.token);
        dispatch({ 
          type: 'USER_LOGIN', 
          payload: { 
            iduser: response.data.iduser,
            uname: response.data.uname,
            isLogged: response.data.isLogged,
            token: response.data.token
          }
        });
        dispatch(NavigationActions.navigate({
          routeName: 'Main'
        }));
      } 
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

export const registerUser = ({ email, password, uname }) => {
  return(dispatch) => {
    dispatch({ type: 'REGISTER_LOADING'});
    axios.post(API_AUTH + 'registerUser', {
      uname: uname,
      password: password,
      email: email
    })
    .then(response => {
      dispatch({
        type: 'USER_REGISTERED',
        payload: response.data.Message
      });
      dispatch(NavigationActions.navigate({
        routeName: 'Login'
      }));
    })
    .catch((error) => {
      dispatch({ type: 'AUTH_ERROR', payload: 'There was an error trying to register the user, please try again, or contact with the admin.' });
    });
  }
};

export const loginWithToken = (token) => {
  return (dispatch) => {
    axios.post(API_AUTH + 'loginWithToken', {
      token: token
    })
    .then(response => {
      dispatch({
        type: 'USER_LOGIN', 
        payload: { 
          iduser: response.data.iduser,
          uname: response.data.uname,
          isLogged: response.data.isLogged,
          token: response.data.token
        }
      });
      dispatch(NavigationActions.navigate({
        routeName: 'Main'
      }));
    })
    .catch((error) => console.log(error));
  }
};

export const logout = (token) => {
  return (dispatch) => {
    axios.post(API_AUTH + 'logoutUser', {
      token: token
    })
    .then(response => {
      dispatch({ type: 'USER_LOGOUT' });
      AsyncStorage.removeItem('userToken');
      dispatch(NavigationActions.navigate({
        routeName: 'Splash'
      }));
    })
    .catch(error => alert(error));
  }
}

export const emailChanged = (text) => {
  return { type: 'EMAIL_CHANGE', payload: text };
};

export const passwordChanged = (text) => {
  return { type: 'PASSWORD_CHANGE', payload: text };
};

export const unameChange = (text) => {
  return { type: 'UNAME_CHANGE', payload: text };
}