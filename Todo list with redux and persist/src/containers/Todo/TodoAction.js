export const ADD_TODO = 'ADD_TODO'
export const addTodo = () => ({
    type: ADD_TODO,
})

export const CHANGE_INPUT = 'CHANGE_INPUT'
export const changeInput = (text) => ({
    type: CHANGE_INPUT,
    text
})

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo
});

export const UNDO_DELETE_TODO = 'UNDO_DELETE_TODO';
export const undoDeleteTodo = (todo) => ({
  type: UNDO_DELETE_TODO,
  todo
});

export const EDIT_TODO = 'EDIT_TODO';
export const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo
});

export const CHANGE_EDIT_INPUT = 'CHANGE_EDIT_INPUT';
export const changeEditInput = (todo,task) => ({
  type: CHANGE_EDIT_INPUT,
  task,
  todo
});

export const SAVE_EDIT_INPUT = 'SAVE_EDIT_INPUT';
export const saveEditInput = (todo) => ({
  type: SAVE_EDIT_INPUT,
  todo
});

export const CANCLE_EDIT_INPUT = 'CANCLE_EDIT_INPUT';
export const cancleEditInput = (todo) => ({
  type: CANCLE_EDIT_INPUT,
  todo
});