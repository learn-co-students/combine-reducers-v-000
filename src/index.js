import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/manageAuthorsAndBooks';
// import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
// I thought that it was a mistake to use a different name than bookApp (the name of the exported function from the reducer).
// However, that is perfectly valid code, as it is aliasing the name of the function.
// See https://github.com/learn-co-curriculum/react-modular-code

// const store = createStore(manageAuthorsAndBooks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
