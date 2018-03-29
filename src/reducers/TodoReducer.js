const INITIAL_STATE = {
  todoText: '',
  status: false,
  todoData: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case 'TODO_ADD': 
      return { ...state, todoText: action.payload }
    case 'TODO_CHANGED_TEXT':
     return { ...state, todoText: action.payload }
    case 'TODOS_USER':
      return { ...state, todoData: action.payload.todoData }
    case 'TODO_COMPLETE':
      return { ...state }
    default:
      return state;
  }
};