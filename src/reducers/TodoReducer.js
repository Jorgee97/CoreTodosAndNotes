const INITIAL_STATE = {
  todoText: '',
  todoData: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case 'TODO_ADD': 
      return { ...state, todoText: '' }
    case 'TODO_CHANGED_TEXT':
     return { ...state, todoText: action.payload }
    case 'TODOS_USER':
      return { ...state, todoData: action.payload.todoData }
    case 'TODO_COMPLETE':
      return { 
        ...state, 
        todoData: state.todoData.map(
          item => 
            item.idtodos !== action.payload 
              ? item : { ...item, completed: !item.completed }
        ) 
      };
    case 'REMOVE_TODO': 
      return { ...state, todoData: state.todoData.filter(item => item.idtodos !== action.payload)}
    default:
      return state;
  }
};