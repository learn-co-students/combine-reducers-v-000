// booksReducer.js
export default function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      console.log("THIS GOT CALLED IN BOOKS!")
      return [...state, action.book];

    case "REMOVE_BOOK":
      idx = state.findIndex(book => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}
