import { combineReducers, Store } from 'redux'
import { configureStore } from 'redux-starter-kit'
import user from './user'
import message from './message'

const reducers = {
  user,
  message
}

const store = configureStore({
  reducer: combineReducers(reducers)
})

export type AppState = ReturnType<typeof store.getState>

export default store
