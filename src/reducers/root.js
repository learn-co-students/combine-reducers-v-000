import authorsReducer from './authors'
import booksReducer from './books'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
 
export default rootReducer;

 
