import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';

/*
  Since we've changed the default export of manageAuthorsAndBooks.js, in
  index.js, we don't need to change anything with createStore unless we wanted
  to update names we've assigned:
*/
import rootReducer from "./reducers/manageAuthorsAndBooks";


// const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/*
By passing our rootReducer to the createStore method, the application
maintains its initial state of { books: [], authors: [] }, just as it did when
we had one reducer. From the application's perspective nothing has changed.
*/
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
