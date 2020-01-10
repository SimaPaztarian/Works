import React, { Component } from 'react'
import { connect } from 'react-redux'

import { decrementCounter, incrementCounter, setCounter } from './CounterAction'

class CounterScreen extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>+</button>
                <span style={{ margin: 10 }}>{this.props.CounterReducer.counter}</span>
                <button onClick={this.props.decrementCounter}>-</button>
                <button onClick={() => this.props.setCounter(14)}>reset</button>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    CounterReducer: store.CounterReducer
})

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
    setCounter: (counter) => dispatch(setCounter(counter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)
