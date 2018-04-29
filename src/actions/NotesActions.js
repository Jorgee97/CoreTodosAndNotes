import axios from 'axios';
import { API_NOTES } from '../utils/types';
import { NavigationActions } from 'react-navigation';

export const NoteChangeTitle = (text) => {
  return {
    type: 'NOTES_TITLE_CHANGE',
    payload: text
  };
};

export const NoteChangeText = (text) => {
  return {
    type: 'NOTES_TEXT_CHANGE',
    payload: text
  };
};

export const NoteIdNOte = (value) => {
  return {
    type: 'PASS_NOTES_AS_PARAMS',
    payload: value
  };
};

export const NoteCreateNote = (token, title, text) => {
  return (dispatch) => {
    axios.post(API_NOTES + 'createNote', {
      token: token,
      text: text,
      title: title,
    })
    .then(response => {
      if (response.data.added) {
        dispatch({ type: 'NOTES_ADD' });
        dispatch(NavigationActions.navigate({
          routeName: 'Notes'
        }));
      }
    })
    .catch(error => alert('Ops! it looks like we have an error, please wait, we will resolve it as quick as a flash.'));
  }
};

export const NoteEdit = (token, title, text, idnotes) => {
  return(dispatch) => {
    axios.post(API_NOTES + 'editNote', {
      token: token,
      title: title,
      text: text,
      idnotes: idnotes
    })
    .then(response => {
      dispatch({ type: 'NOTES_EDIT' });
      dispatch(NavigationActions.navigate({
        routeName: 'Notes'
      }))
    })
    .catch(error => alert('Ops! it looks like we have an error, please wait, we will resolve it as quick as a flash.'));
  }
};

export const NoteList = (token) => {
  return (dispatch) => {
    axios.post(API_NOTES + 'showNotes', {
      token: token
    })
    .then(response => {
      if (response.length != 0) {
        dispatch({
          type: 'NOTES_LIST',
          payload: {
            notesData: response.data
          }
        })
      }
    })
    .catch((error) => alert('Ops! it looks like we have an error, please wait, we will resolve it as quick as a flash.'));
  }
};

export const NoteDelete = (token, idnotes) => {
  return (dispatch) => {
    axios.post(API_NOTES + 'deleteNote', {
      token: token,
      idnotes: idnotes
    })
    .then(response => {
      dispatch({
        type: 'NOTES_REMOVE',
        payload: idnotes
      });
    })
    .catch((error) => console.log('Ops! it looks like we have an error, please wait, we will resolve it as quick as a flash.', error));
  }
};
