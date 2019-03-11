import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})
//separate each reducer into own file. import each reducer into reducers/rootReducer.js 
//or put combineReducer in index.js, and import authorsReducer and booksReducer; 

//produce reducer that returns a state with keys for both reducers 
export default rootReducer

function booksReducer(state = [], action) {
  let idx; 
  switch (action.type) {

    case "ADD_BOOK":
      return {
        ...state,
        books: [...state, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.indexOf(action.id);
      return {
        ...state,
        books: [
          state.books.slice(0, idx),
          state.books.slice(idx + 1),
        ];
        default: return state;
      };
  } 
}

import uuid from "uuid";//this is a package that handles unique ID generation. 

function authorsReducer(state = [], action) {
  let idx; 
  switch(action.type) {

      case "ADD_AUTHOR":
        return {
          ...state,
          authors: [...state, action.author]
        };

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
      return {
        ...state,
        authors: [
          state.authors.slice(0, idx),
          state.authors.slice(idx + 1)
        ]
      };
//does it match any, if not, add authorname to author array. 
      case "ADD_BOOK";
        let existingAuthor = state.filter( 
          author => author.authorName === action.book.authorName
          );
        if (existingAuthor.length > 0) {
          return state;
        } else {
          return [...state, {authorName: action.book.authorName, id:uuid() }];
        }
    default:
      return state;
    }
  }
}

//original code 
// export default function bookApp(state = {
//   authors: [],
//   books: []
// }, action) {
//   let idx
//   switch (action.type) {

//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: [...state.books, action.book]
//       };

//     case "REMOVE_BOOK":
//       idx = state.books.indexOf(action.id);
//       return {
//         ...state,
//         books: [
//           state.books.slice(0, idx),
//           state.books.slice(idx + 1),
//         ]
//       };

//     case "ADD_AUTHOR":
//         return {
//           ...state,
//           authors: [...state.authors, action.author]
//         };

//     case "REMOVE_AUTHOR":
//       idx = state.authors.indexOf(action.id);
//       return {
//         ...state,
//         authors: [
//           state.authors.slice(0, idx),
//           state.authors.slice(idx + 1)
//         ]
//       };

//     default:
//       return state;
//     }
// };
