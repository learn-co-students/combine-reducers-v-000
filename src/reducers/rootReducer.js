import authorsReducer from './reducers/authorsReducer'
import booksReducer from './reducers/booksReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    books: booksReducer,
    author: authorsReducer
})

// export rootReducer

