import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import authorsReducer from './reducers/authorsReducer'
import booksReducer from './reducers/booksReducer'
// import manageAuthorsAndBooks from './reducers/manageAuthorsAndBooks'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

const store = createStore(rootReducer, // previously manageAuthorsAndBooks
	  /* 
       access the browser to find the redux-devtool extension and 
       execute it so that the application can communicate with it 
       (https://github.com/zalmoxisus/redux-devtools-extension)
    */
		window.__REDUX_DEVTOOLS_EXTENSION__ && 
		window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
