import { combineReducers } from "redux";

/*
Through combineReducer, we're telling Redux to produce a reducer which will
return a state that has both a key of books with a value equal to the return
value of the booksReducer() and a key of authors with a value equal to the
return value of the authorsReducer(). Now if you look at the booksReducer()
and the authorsReducer() you will see that each returns a default state of an
empty array.
*/
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
      idx = state.findIndex(book => book.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

/*
Now if we examine the authorsReducer(), notice that this reducer only concerns
itself with its own slice of the state. This makes sense. Remember that
ultimately the array that the authorsReducer() returns will be the value to the
key of authors. Similarly the authorsReducer() only receives as its state
argument the value of state.authors, in other words the authors array.

So examining the authorsReducer(), we see that we no longer retrieve the list of
authors with a call to state.authors, but can access the list of authors simply
by calling state.
*/
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}
