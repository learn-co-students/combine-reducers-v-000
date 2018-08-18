//there will usually be one combine reducer file like 'rootReducer.js' and the two reducers would have their own files and would be imported.
//the combineReducer function can also be called in the index.js file

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authors: autorsReducer,
  books: booksReducer,
})

export default rootReducer;

function booksReducer(state = [], action) {
  let idx
  switch (action.type) {

    case "ADD_BOOK":
      return [...state, action.book]

    case "REMOVE_BOOK":
      idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ]

    default:
      return state
  }
}

function authorsReducer(state = [], action) {
  let idx
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ]

    //so that when a new book is added, it checks to see if the author is already in the array and if not, add him/her.
    case "ADD_BOOK":
      let existingAuthor = state.filter(author => author.authorName === action.book.authorName)
      if(existingAuthor.length > 0) {
        return state
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }]
      }

    default:
      return state

  }
}

