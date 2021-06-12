import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';
import { combineReducers } from "redux";
export default combineReducers({
  books: booksReducer,
  authors: authorsReducer
})
