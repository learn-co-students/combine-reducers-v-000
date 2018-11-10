import {combineReducers} from "redux";
import uuid from 'uuid';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})
//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()
export default rootReducer;

function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

    case "REMOVE_BOOK":
    debugger
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

//Wrote this myself! Except the action.id part.
function authorsReducer(state= [], action) {
  let idx;
  switch(action.type) {
    case "ADD_AUTHOR":
      return {...state, authors: [...state, action.author]}
    case "REMOVE_AUTHOR":
    idx = state.indexOf(action.id)
      return {...state, authors: [...state.slice(0, idx), ...state.slice(idx+1)]}
    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }
    default:
      return state;
  }
}


// export default function bookApp(state = {
//   authors: [],
//   books: []
// }, action) {
//   let idx
//   switch (action.type) {
//
//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: [...state.books, action.book]
//       };
//
//     case "REMOVE_BOOK":
//       idx = state.books.indexOf(action.id);
//       return {
//         ...state,
//         books: [
//           state.books.slice(0, idx),
//           state.books.slice(idx + 1),
//         ]
//       };
//
//     case "ADD_AUTHOR":
//         return {
//           ...state,
//           authors: [...state.authors, action.author]
//         };
//
//     case "REMOVE_AUTHOR":
//       idx = state.authors.indexOf(action.id);
//       return {
//         ...state,
//         authors: [
//           state.authors.slice(0, idx),
//           state.authors.slice(idx + 1)
//         ]
//       };
//
//     default:
//       return state;
//     }
// };
