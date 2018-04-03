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
  info: '',
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
    case 'UNAME_CHANGE':
      return { ...state, uname: action.payload }
    case 'LOGIN_LOADING':
      return { ...state, loading: true, error: '' }
    case 'REGISTER_LOADING':
      return { ...state, loading: true, error: '' }
    case 'USER_REGISTERED':
      return { ...INITIAL_STATE }
    default: 
      return state;
  }
};