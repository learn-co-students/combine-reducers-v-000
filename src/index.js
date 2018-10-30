import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';

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

const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
