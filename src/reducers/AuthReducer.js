import { AsyncStorage } from 'react-native'; 

const INITIAL_STATE = {
  iduser: null,
  uname: '',
  isLogged: false,
  error: '',
  email: '',
  password: '',
  loading: false,
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return { ...state,  ...INITIAL_STATE, 
        iduser: action.payload.iduser,
        uname: action.payload.uname,
        isLogged: action.payload.isLogged,
        token: action.payload.token
      }
    case 'USER_LOGOUT':
      return INITIAL_STATE;
    case 'AUTH_ERROR': 
      return { ...state, error: action.payload, password: '', loading: false }
    case 'EMAIL_CHANGE':
      return { ...state, email: action.payload }
    case 'PASSWORD_CHANGE':
      return { ...state, password: action.payload }
    case 'LOGIN_LOADING':
      return { ...state, loading: true, error: '' }
    default: 
      return state;
  }
};