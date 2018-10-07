function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state, action.book]
      };

    case 'REMOVE_BOOK':
      idx = state.indexOf(action.id);
      return {
        ...state,
        books: [state.slice(0, idx), state.books.slice(idx + 1)]
      };

    default:
      return state;
  }
}
export default booksReducer;
