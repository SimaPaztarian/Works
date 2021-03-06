import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const middleware = [thunk]
middleware.push(createLogger())

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middleware))
    
)
export const persistor = persistStore(store)