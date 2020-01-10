import React, { useContext } from 'react'
import './Todo.css';
import { Button, Input } from 'antd';

import { TodoContext, TodoProvider} from '../Todo/TodoContext'
import { changeInput, changeEditInput, saveEditInput, cancleEditInput, isComplete, undoComplete, editTodo, undo_delete, deleteTodo } from '../Todo/TodoAction'

function Todo() {
    const { reducer, dispatch } = useContext(TodoContext)

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
								dispatch({ type: 'ADD_TODO'});
							}}
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
						>
							<Input
								placeholder="Todo"
								value={reducer.inputText}
								onChange={(e) => {
									dispatch(changeInput(e.target.value));
								}}
								
							/>
							<Button
								type="primary"
								onClick={() => {
                                    dispatch({ type: 'ADD_TODO'});
                                   
								}}
								style={{ marginLeft: '10px' }}
							>
								Add
							</Button>
						</form>
						<ul>
							{reducer.todos.map((todo) => {
								console.log(todo)
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
							{reducer.deleted_Todos.map((todos_deleted, index) => {
								return (
									<li style={{marginTop:'10px'}} key={todos_deleted.id}>
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
							{reducer.complete_todos.map((todo) => {
								return (
									<li style={{marginTop:'10px'}} key={todo.id}>
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
    )
}

function TodoWithContext() {

    return (
        <TodoProvider>
            <h1>Todo With Context</h1>
            <Todo/>
        </TodoProvider>
    )
}

export default TodoWithContext