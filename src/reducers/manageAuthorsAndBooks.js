import { combineReducers } from "redux";
import uuid from 'uuid'; //this package handles unique ID generaion =.

// tells Redux to produce a reducer which returns a state that both keys of books & authors with the return value
// equal to the return value of the function authorsReducer & booksReducer
//the functions start and returns with a default value of an empty array

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

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BOOK":
    let existingAuthor = state.filter(
      author => author.authorName === action.book.authorName //checks to see if authorName matches with name dispatched from BookInoput component; if matches, saves it to variable
    );
    if (existingAuthor.length > 0){ // if there is something saved in variable, the length would be more than 0 then the if statement would be true and it would means the name alreday exist and the block would simply return the state without any change
      return state;
    } else { // else
      return [...state, { authorName: action.book.authorName, id: uuid() }];
    }

    default:
      return state;
  }
}
