import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage  from 'redux-persist/es/storage'

import { rootReducer } from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware()
))

export const persistor = persistStore(store)