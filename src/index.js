import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
 /* nothing needs to change unless we want manageAuthrosAndBooks to just be called rootReducer instead */

const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);


//if reducers are in separate files
// import authorsReducer from './reducers/authorsReducer';
// import booksReducer from './reducers/booksReducer';
 
// const rootReducer = combineReducers({
//   books: booksReducer,
//   authors: authorsReducer
// })
 
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 