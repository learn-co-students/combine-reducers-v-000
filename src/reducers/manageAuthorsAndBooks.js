/*Through combineReducer, we're telling Redux to produce a reducer which will return a state 
that has both a key of books with a value equal to the return value of the booksReducer() 
and a key of authors with a value equal to the return value of the authorsReducer(). 
Now if you look at the booksReducer() and the authorsReducer() you will see that each returns a default state of an empty array.*/

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;

function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
 
    case "REMOVE_BOOK":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}
 
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
 
    // case "REMOVE_AUTHOR":
    //   idx = state.indexOf(action.id);
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];

    //As per open issue...
    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
        return {
          ...state,
          authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
        };
      default:
      return state;
  }
}