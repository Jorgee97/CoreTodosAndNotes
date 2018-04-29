const INITIAL_STATE = {
  noteText: '',
  noteTitle: '',
  noteId: 0,
  notesData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NOTES_TITLE_CHANGE':
      return { ...state, noteTitle: action.payload }
    case 'NOTES_TEXT_CHANGE':
      return { ...state, noteText: action.payload }
    case 'NOTES_ADD':
      return { ...state, noteText: '', noteTitle: '' }
    case 'NOTES_LIST':
      return { ...state, notesData: action.payload.notesData }
    case 'NOTES_REMOVE':
      return { ...state, notesData: state.notesData.filter(item => item.idnotes !== action.payload)}
    case 'NOTES_EDIT':
      return { ...state, noteText: '', noteTitle: '', noteId: 0 }
    case 'PASS_NOTES_AS_PARAMS':
      return { ...state, noteId: action.payload }
    default:
      return state
  }
};