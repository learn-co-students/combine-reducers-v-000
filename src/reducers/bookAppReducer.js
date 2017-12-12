export function bookApp(state = {
  authors: [],
  books: []
}, action) {
  switch(action.type) {
    case 'ADD_BOOK':
      return Object,assign(state, {
        books: state.books.concat(action.book)
      })

    case 'REMOVE_BOOK':
      const index = state.books.indexOf(action.id)
      return Object.assign(state, {
        books: [
          state.books.slice(0, index),
          state.books.slice(index + 1)
        ]
      })

    case 'ADD_AUTHOR':
      return Object.assign(state, {
        authors: state.authors.concat(action.author)
      })

    case 'REMOVE_AUTHOR':
      const index = state.authors.indexOf(action.id)
      return Object.assign(state, {
        authors: [
          state.authors.slice(0, index),
          state.authors.slice(index + 1)
        ]
      })

    default:
      return state
  }
}

export const store = createStore(bookApp)
