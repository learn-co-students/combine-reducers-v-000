import {combineReducers} from "redux";
import uuid from "uuid";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

function booksReducers(state = [], action) {
  let idx;
  switch (action.type) {

    case "ADD_BOOK":
      return [
        ...state, action.book]

    case "REMOVE_BOOK":
      idx = state.books.indexOf(action.id);
      return [
        ...state.slice(0, idx),
        ...state.books.slice(idx + 1)]

    case "ADD_BOOK":
      let existingAuthor = state.filter(author +> author.authorNmae === action.book.authorName);
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [
        ...state, {authorName: action.book.authorName, id: uuid()}];
      }

      default:
        return state;
      }
    }

function authorsReducers(state = [], action) {
  let idx;
  switch(action.type) {
    case "ADD_AUTHOR":
        return [...state, action.author]

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
      return [
        ...state.slice(0, idx),
          state.authors.slice(idx + 1)
        ]

    default:
      return state;
    }
};
