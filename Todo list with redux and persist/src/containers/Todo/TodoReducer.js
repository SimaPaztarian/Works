import { ADD_TODO, CHANGE_INPUT, DELETE_TODO, UNDO_DELETE_TODO, EDIT_TODO, CHANGE_EDIT_INPUT, SAVE_EDIT_INPUT, CANCLE_EDIT_INPUT } from './TodoAction';
import uuid from 'uuid';

const initialState = {
	inputText: '',
	id: uuid(),
	todos: [],
	todos_delete: [],
	todos_complete: [],
	task: ''
};

const TodoReducer = (state = initialState, action = {}) => {
	const { type } = action;

	switch (type) {
		case CHANGE_INPUT:
			return {
				...state,
				inputText: action.text
			};
		case ADD_TODO:
			return {
				...state,
				todos: [ { id: uuid.v4(), todo: state.inputText, isEditing: false, editingText:state.inputText }, ...state.todos ],
				inputText: ''
			};
		case DELETE_TODO:
			const deletedTodos = state.todos.splice(action.index, 1);
			return {
				...state,
				todos: [
					...state.todos // remove
				],
				todos_delete: [
					...state.todos_delete, // add
					...deletedTodos
				]
			};
		case UNDO_DELETE_TODO:
			const undoDeletedTodos = state.todos_delete.splice(action.index, 1);
			return {
				...state,
				todos: [
					...state.todos,
					...undoDeletedTodos // add
				],
				todos_delete: [
					...state.todos_delete // remove
				]
			};
		case EDIT_TODO:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.todo.id) {
						return {
							...todo,
							isEditing: true
						};
					}
					return todo;
				})
			};
		case CHANGE_EDIT_INPUT:
			return {
				...state,
				todos: state.todos.map(todo =>{
                    if(todo.id === action.todo.id){
                        return{
                            ...todo,
                            editingText: action.task
                        }
                    }
                    return todo;
                })
            };
        case SAVE_EDIT_INPUT:
            return{
                ...state,
                todos: state.todos.map(todo =>{
                    if(todo.id === action.todo.id){
                        return{
                            ...todo,
                            todo: todo.editingText,
                            isEditing: false
                            }
                    }
                    return todo;
                })
            };
        case CANCLE_EDIT_INPUT:
            return{
                ...state,
                todos: state.todos.map(todo =>{
                    if(todo.id === action.todo.id){
                        return{
                            ...todo,
                            editingText: todo.todo,
                            isEditing: false
                            }
                    }
                    return todo;
                })
            }
		default:
			return state;
	}
};

export default TodoReducer;
