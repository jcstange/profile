import { createStore, applyMiddleware } from 'redux'
import { indexReducers } from './reducers/reducers'
import thunk from 'redux-thunk'

export const store = createStore(
    indexReducers,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch