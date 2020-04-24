import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./reducers/manageAuthorsAndBooks";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';


const store = createStore(rootReducer,manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
