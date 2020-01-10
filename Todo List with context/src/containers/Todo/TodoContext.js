import React, { createContext, useState } from 'react';
import uuid from 'uuid';

import {
	CHANGE_INPUT,
	DELETE_TODO,
	UNDO_DELETE_TODO,
	Edit_TODO,
	CHANGE_EDIT_INPUT,
	SAVE_EDIT_INPUT,
	CANCLE_EDIT_INPUT,
	IS_COMPLETE,
	UNDO_COMPLETE
} from '../Todo/TodoAction';

const initialState = {
	inputText: '',
	todos: [],
	deleted_Todos: [],
	complete_todos: []
};

function TodoReducer(state, action) {
	const { type, text } = action;

	switch (type) {
		case 'ADD_TODO':
			if (!state.inputText) return state;
			return {
				...state,
				todos: [
					{
						id: uuid.v4(),
						todo: state.inputText,
						isEditing: false,
						editingText: state.inputText,
						isComplete: false
					},
					...state.todos
				],
				inputText: ''
			};
		case CHANGE_INPUT:
			return {
				...state,
				inputText: text
			};
		case DELETE_TODO:
			const deletedTodos = state.todos.splice(action.index, 1);
			return {
				...state,
				todos: [ ...state.todos ],
				deleted_Todos: [ ...state.deleted_Todos, ...deletedTodos ]
			};
		case UNDO_DELETE_TODO:
			const undoDeletedTodos = state.deleted_Todos.splice(action.index, 1);
			return {
				...state,
				todos: [ ...state.todos, ...undoDeletedTodos ],
				deleted_Todos: [ ...state.deleted_Todos ]
			};
		case Edit_TODO:
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
				todos: state.todos.map((todo) => {
					if (todo.id === action.todo.id) {
						return {
							...todo,
							editingText: action.task
						};
					}
					return todo;
				})
			};
		case SAVE_EDIT_INPUT:
			if (!state.inputText) return state;
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.todo.id) {
						return {
							...todo,
							todo: todo.editingText,
							isEditing: false
						};
					}
					return todo;
				})
			};
		case CANCLE_EDIT_INPUT:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.todo.id) {
						return {
							...todo,
							editingText: todo.todo,
							isEditing: false
						};
					}
					return todo;
				})
			};
		case IS_COMPLETE:
			const completeTodos = state.todos.splice(action.index, 1);
			return {
				...state,
				todos: [ ...state.todos ],
				complete_todos: [ ...state.complete_todos, ...completeTodos ],
				isComplete: !state.todos.isComplete
			};
		case UNDO_COMPLETE:
			const undoTodos = state.complete_todos.splice(action.index, 1);
			return {
				...state,
				todos: [ ...state.todos, ...undoTodos ],
				complete_todos: [ ...state.complete_todos ],
				isComplete: !state.todos.isComplete
			};
		default:
			return state;
	}
}

// ===================================================================

const TodoContext = createContext(initialState);

function useReducer(reducerFunction, initialState) {
	const [ reducer, setReducer ] = useState(initialState);

	const dispatch = (action) => {
		setReducer(reducerFunction(reducer, action));
	};

	return [ reducer, dispatch ];
}

function TodoProvider(props) {
	const [ reducer, dispatch ] = useReducer(TodoReducer, initialState);

	return (
		<TodoContext.Provider
			value={{
				reducer,
				dispatch
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
