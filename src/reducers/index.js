import { combineReducers } from 'redux';
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;
