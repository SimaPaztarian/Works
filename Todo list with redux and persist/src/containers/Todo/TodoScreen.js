import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from './TodoAction'

class TodoScreen extends Component {
    state = {
        value: ''
    }

    render() {
        return (
            <div>
                <h1>TO DO</h1>

                <div>
                    <input value={this.state.value} onChange={(event) => {
                        this.setState({
                            value: event.target.value
                        })
                    }}/>
                    <button onClick={() => {
                        this.props.addTodo(this.state.value)

                        this.setState({
                            value: ''
                        })

                    }}>Add</button>
                </div>

                <ul>
                    {
                        this.props.TodoReducer.todos.map(todo => {
                            return <li>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    TodoReducer: store.TodoReducer
})

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)
