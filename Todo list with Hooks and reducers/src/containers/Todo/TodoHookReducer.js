import React, { useReducer,useRef } from 'react';
import './Todo.css';
import { Button, Input } from 'antd';

import uuid from 'uuid';

const initialState = {
	inputText: '',
	todos: [],
	deleted_Todos: [],
	complete_todos: []
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = () => ({
	type: ADD_TODO
});

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (text) => ({
	type: CHANGE_INPUT,
	text
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (todo) => ({
	type: DELETE_TODO,
	todo
});

export const UNDO_DELETE_TODO = 'UNDO_DELETE_TODO';
export const undo_delete = (todo) => ({
	type: UNDO_DELETE_TODO,
	todo
});

export const Edit_TODO = 'Edit_TODO';
export const editTodo = (todo) => ({
	type: Edit_TODO,
	todo
});

export const CHANGE_EDIT_INPUT = 'CHANGE_EDIT_INPUT';
export const changeEditInput = (todo, task) => ({
	type: CHANGE_EDIT_INPUT,
	todo,
	task
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

export const IS_COMPLETE = 'IS_COMPLETE';
export const isComplete = (todo) => ({
	type: IS_COMPLETE,
	todo
});

export const UNDO_COMPLETE = 'UNDO_COMPLETE';
export const undoComplete = (todo) => ({
	type: UNDO_COMPLETE,
	todo
});

const TodoReducer = (state, action) => {
	const { type, text } = action;

	switch (type) {
		case ADD_TODO:
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
};


function TodoHookReducer() {
	const [ Reducer, dispatch ] = useReducer(TodoReducer, initialState);
	// console.log(Reducer.todos);
	return (
		<div>
			<header className="todo-header">
				<div className="header-top">
					<img src="/assets/images/todo-hamburger.svg" alt="" />
					<p>Todo List</p>
					<img src="/assets/images/calendar.svg" alt="" />
				</div>
			</header>
			<main>
				<div className="container">
					<h1>Today</h1>
					<p style={{ marginLeft: '10px', fontSize: '.7rem' }}>Nov 13,2019</p>
					<div className="todo-container">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								dispatch(addTodo());
							}}
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
						>
							<Input
								placeholder="Todo"
								value={Reducer.inputText}
								onChange={(e) => {
									dispatch(changeInput(e.target.value));
								}}
								
							/>
							<Button
								type="primary"
								onClick={() => {
                                    dispatch(addTodo());
                                   
								}}
								style={{ marginLeft: '10px' }}
							>
								Add
							</Button>
						</form>
						<ul>
							{Reducer.todos.map((todo) => {
								return (
									<li key={todo.id}>
										{todo.isEditing ? (
											<form
												style={{
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'column',
													marginTop: '10px'
												}}
											>
												<Input
													value={todo.editingText}
													onChange={(e) => {
														dispatch(changeEditInput(todo, e.target.value));
													}}
												/>
												<div style={{ marginTop: '10px' }}>
													<button
														onClick={() => {
															dispatch(saveEditInput(todo));
														}}
														className="todo-btn"
													>
														save
													</button>
													<button
														onClick={() => {
															dispatch(cancleEditInput(todo));
														}}
														className="todo-btn"
														style={{ marginLeft: '10px' }}
													>
														cancle
													</button>
												</div>
											</form>
										) : (
											<div className="todo-item">
												<input
													type="checkbox"
													checked={todo.isComplete}
													onChange={() => {
														dispatch(isComplete(todo));
													}}
												/>
												<span className={todo.isComplete ? 'line-into' : ''}>{todo.todo}</span>
												<button
													onClick={() => {
														dispatch(deleteTodo(todo));
													}}
													className="todo-btn"
												>
													Delete
												</button>
												<button
													onClick={() => {
														dispatch(editTodo(todo));
													}}
													className="todo-btn"
												>
													Edit
												</button>
											</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
					{/* ***************************************** */}
					<div className="deleted-todos">
						<h1>Deleted ToDos</h1>
						<ul>
							{Reducer.deleted_Todos.map((todos_deleted, index) => {
								return (
									<li key={todos_deleted.id}>
										<span style={{ marginRight: '15px' }}>{todos_deleted.todo}</span>
										<button
											onClick={() => {
												dispatch(undo_delete(todos_deleted));
											}}
											className="todo-btn"
										>
											undo
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="deleted-todos">
						<h1>complete todos</h1>
						<ul>
							{Reducer.complete_todos.map((todo) => {
								return (
									<li key={todo.id}>
										<input
											type="checkbox"
											checked
											style={{ borderColor: 'darkgrey', color: 'darkgrey' }}
										/>
										<span className="line-into">{todo.todo}</span>
										<button
											className="todo-btn"
											onClick={() => {
												dispatch(undoComplete(todo));
											}}
											style={{ marginLeft: '10px' }}
										>
											undo
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}
export default TodoHookReducer;
