function booksReducer(state = [], action) {
  let index;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "REMOVE_BOOK":
      index = state.indexOf(action.id);
      return [...state.slice(0, index), ...state.slice(index+1)];
    default:
      return state;
  }
}

export default booksReducer;
