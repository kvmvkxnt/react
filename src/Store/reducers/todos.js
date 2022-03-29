import { ADD_TODO } from '../types/todos';

const initialValue = { todos: [{ id: 0, title: 'Do something', isCompleted: false}]};

export const todosReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}
