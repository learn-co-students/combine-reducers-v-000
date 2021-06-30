// export const addAuthor = author => {
//   return {
//     type: 'ADD_AUTHOR',
//     author
//   };
// };

// export const removeAuthor = id => {
//   return {
//     type: 'REMOVE_AUTHOR',
//     id
//   };
// };

// export const addBook = book => {
//   return {
//     type: 'ADD_BOOK',
//     book
//   };
// };

// export const removeBook = id => {
//   return {
//     type: 'REMOVE_BOOK',
//     id
//   };
// };

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';


const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);