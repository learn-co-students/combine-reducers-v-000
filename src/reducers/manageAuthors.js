import uuid from 'uuid';

export default function authorsReducer(state = [], action) {
  let idx;

  switch (action.type) {
    case 'ADD_AUTHOR':
      return [...state, action.author]

    case 'REMOVE_AUTHOR':
      idx = state.indexOf(action.id);

      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'ADD_BOOK':
      let existingAuthor = state.filter(
        a => a.authorName === action.book.authorName
      );

      if (existingAuthor.length > 0) {
        return state;
      } else {
        const id = uuid();
        console.log(id)
        return [...state, { authorName: action.book.authorName, id: id }];
      }

    default:
      return state;
  }
}