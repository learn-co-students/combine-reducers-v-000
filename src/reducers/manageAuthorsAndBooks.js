export default function bookApp(
  state = {
    authors: [],
    books: []
  },
  action
) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.indexOf(action.id);
      return {
        ...state,
        books: [state.books.slice(0, idx), state.books.slice(idx + 1)]
      };

    case "ADD_AUTHOR":
      return {
        ...state,
        authors: [...state.authors, action.author]
      };

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
      return {
        ...state,
        authors: [state.authors.slice(0, idx), state.authors.slice(idx + 1)]
      };

    default:
      return state;
  }
}
This is the current set up in src/reducers/manageAuthorsAndBooks.js, and it works. You can see, however, by working with just two resources, the size of our reducer increased significantly. Moreover, by placing each resource in the same reducer, we are coupling these resources together, where we would prefer to maintain their separation. By creating separate reducers for each resource in an application, we can keep our code organized as our applications get more complicated.

Refactor by using combineReducers
The combineReducers() function allows us to write two or more separate reducers, then pass each reducer to the combineReducers() function to produce the reducer we wrote above. Then we pass that combined reducer to the store in src/index.js. Let's write some code, and then we'll walk through it below.

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

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}
