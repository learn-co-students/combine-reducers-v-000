
// Note : General working example of a cohesive reducer bookApp
// export default function bookApp(state = {
//     authors: [],
//     books: []
//   }, action) {
    
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

// Separated Book/Author reducers later combined
import { combineReducers } from "redux";
import uuid from 'uuid'; // Note : Used in the authorsReducer refactor

// Reducer that combines the below reducers -- Essentially producing the above but without coding it all together and requiring a more complicated "state"
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;


// Book specific reducer -- only concerned with the "state.books" state, which is represented as "state" here
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
 
// Author specific reducer -- only concerned with the "state.authors" state, which is represented as "state" here
function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];
 
    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    // Note : Can have multiple reducers react to the same action using the above combineReducers() and without changing the rest of the app's behavior
    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }]; // Note : "uuid()" is a package that handles unique ID generation
    }

 
    default:
      return state;
  }
}
