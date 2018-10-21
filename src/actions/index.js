import authorsReducer from './reducers/authorsReducer';
import booksReducer from './reducers/booksReducer';
import { createStore } from "redux";

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})
 
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export const addAuthor = author => {
  return {
    type: 'ADD_AUTHOR',
    author
  };
};

export const removeAuthor = id => {
  return {
    type: 'REMOVE_AUTHOR',
    id
  };
};

export const addBook = book => {
  return {
    type: 'ADD_BOOK',
    book
  };
};

export const removeBook = id => {
  return {
    type: 'REMOVE_BOOK',
    id
  };
};
