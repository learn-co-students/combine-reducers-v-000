export default function bookApp(state = {
  authors: [],
  books: []
}, action) {
  let idx
  switch (action.type) {

    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.book]
      }

    case "REMOVE_BOOK":
      idx = state.books.indexOf(action.id)
      /* 
        Slice will create a new array. We create two arrays: from beggining to index and 
        from index+1 to end. Then we apply the spread operator (...) to take the items
        of those arrays and create a new single array containing all the items we need
      */
      return {
        ...state,
        books: [
          state.books.slice(0, idx),
          state.books.slice(idx + 1),
        ]
        /* filter() will create a new array, omitting the specified index */
        // ...state.books.filter(book => book.id !== idx)
      }

    case "ADD_AUTHOR":
        return {
          ...state,
          authors: [...state.authors, action.author]
        }

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id)
      /* 
        Slice will create a new array. We create two arrays: from beggining to index and 
        from index+1 to end. Then we apply the spread operator (...) to take the items
        of those arrays and create a new single array containing all the items we need
      */
      return {
        ...state,
        authors: [
          state.authors.slice(0, idx),
          state.authors.slice(idx + 1)
        ]
        /* filter() will create a new array, omitting the specified index */
        // ...state.authors.filter(author => author.id !== idx)
      }

    default:
    
      return state
    }
}
