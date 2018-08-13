import { combineReducers } from 'redux';
 
//Use combineReducers to automatically build a rootReducer that uses the output of the component reducers
//To create the results for each key (authors and books)
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
 
//This is now our default export, so anything that's pulling this file in will get the rootReducer
//No need to rename a bunch of stuff.
export default rootReducer
 
//Here's the component booksReducer, could function on its own.
function booksReducer(state = [], action) {
  let idx
  switch (action.type) {
 
     case "ADD_BOOK":
      return [...state, action.book]
 
    case "REMOVE_BOOK":
      idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ]
 
    default:
      return state;
  }
}
 
 
//Here's the component Authors reducer, could also function on its own.
function authorsReducer(state = [], action) {
  let idx
  switch (action.type) {
 
    case "ADD_AUTHOR":
      return [...state, action.author]
 
    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ]
 
    default:
      return state;
  }
}