import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from './CounterAction'

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action = {}) => {
    const { type, counter } = action

    switch (type) {
        case SET_COUNTER:
            return {
                ...state,
                counter
            }
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default CounterReducer
