import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export const store = createStore(rootReducer)

function authorsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_AUTHOR':
      return state.concat(action.author)

    case 'REMOVE_AUTHOR':
      const index = state.indexOf(action.id)
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}

function booksReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_BOOK':
      return state.concat(action.book)

    case 'REMOVE_BOOK':
      const index = state.indexOf(action.id)
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}
