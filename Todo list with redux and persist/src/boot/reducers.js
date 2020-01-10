import {combineReducers} from 'redux';

import CounterReducer from '../containers/Counter/CounterReducer'
import TodoReducer from '../containers/Todo/TodoReducer'

export default combineReducers({
    CounterReducer,
    TodoReducer
});
