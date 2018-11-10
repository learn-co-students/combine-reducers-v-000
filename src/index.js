import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
import rootReducer from './reducers/manageAuthorsAndBooks';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//By passing our rootReducer to the createStore method, the application maintains its initial state of { books: [], authors: [] }, just as it did when we had one reducer. From the application's perspective nothing has changed.
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
