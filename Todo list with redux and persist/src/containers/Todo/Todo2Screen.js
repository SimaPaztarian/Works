import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	addTodo,
	changeInput,
	deleteTodo,
	undoDeleteTodo,
	editTodo,
	changeEditInput,
	saveEditInput,
	cancleEditInput
} from './TodoAction';

class Todo2Screen extends Component {
	state = {
		value: ''
	};

	render() {
		// console.log(this.props.TodoReducer.isEditing)
		return (
			<div>
				<h1>TO DO</h1>

				<div>
					<input
						ref={'todo'}
						value={this.props.TodoReducer.inputText}
						onChange={(event) => {
							this.props.changeInput(event.target.value);
						}}
					/>
					<button
						onClick={() => {
							this.props.addTodo();

							this.refs['todo'].focus();
						}}
					>
						Add
					</button>
				</div>
				{this.props.TodoReducer.todos.map((todo, index) => {
					return (
						<ul>
							<li key={todo.id}>
								{todo.isEditing ? (
									<form>
										<input
											type="text"
											value={todo.editingText}
											onChange={(event) => {
												this.props.changeEditInput(todo, event.target.value);
											}}
										/>
										<button
											onClick={() => {
												this.props.saveEditInput(todo);
											}}
										>
											save
										</button>
										<button
											onClick={() => {
												this.props.cancleEditInput(todo);
											}}
										>
											cancel
										</button>
									</form>
								) : (
									<div>
										<span style={{ marginRight: '15px' }}>{todo.todo}</span>
										<button
											onClick={() => {
												this.props.deleteTodo(todo);
											}}
										>
											delete
										</button>
										<button
											onClick={() => {
												this.props.editTodo(todo);
											}}
										>
											edit
										</button>
									</div>
								)}
							</li>
						</ul>
					);
				})}

				<div>
					<h1>Deleted Todo</h1>
					<ul>
						{this.props.TodoReducer.todos_delete.map((todos_delete, index) => {
							return (
								<div>
									<span style={{ marginRight: '15px' }}>{todos_delete.todo}</span>
									<button
										onClick={() => {
											this.props.undoDeleteTodo(index, todos_delete);
										}}
									>
										undo
									</button>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => ({
	TodoReducer: store.TodoReducer
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: () => dispatch(addTodo()),
	changeInput: (text) => dispatch(changeInput(text)),
	deleteTodo: (index, todo) => dispatch(deleteTodo(index, todo)),
	undoDeleteTodo: (index, todo) => dispatch(undoDeleteTodo(index, todo)),
	editTodo: (index) => dispatch(editTodo(index)),
	changeEditInput: (todo, task) => dispatch(changeEditInput(todo, task)),
	saveEditInput: (todo) => dispatch(saveEditInput(todo)),
	cancleEditInput: (todo) => dispatch(cancleEditInput(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo2Screen);
