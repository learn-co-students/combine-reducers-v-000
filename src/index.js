import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks';
import rootReducer from './reducers/rootReducer'



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function booksReducer(state=[], action) {
  let idx;
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, action.book]

      case 'REMOVE_BOOK':
        return [...state.slice(0, idx), ...state.slice(idx + 1)];

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
