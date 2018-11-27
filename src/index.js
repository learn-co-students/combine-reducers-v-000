import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
import uuid from "uuid";


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer;

function booksReducer(state =[], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK": 
      return [...state, action.book];

    case "REMOVE_BOOK":
      idx = state.indexOf(action.id);
      return [...state.slice(0,idx), ...state.slice(idx+1)];
      
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
      return [...state.slice(0,idx), ...state.slice(idx+1)];

    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      )
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid()}]
      }
      
    default:
      return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
