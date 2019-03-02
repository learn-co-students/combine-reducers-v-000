import { combineReducers } from 'redux';
import authorsReducer from './manageAuthors';
import booksReducer from './manageBooks';

const rootReducers = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducers;



