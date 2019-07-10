import uuid from "uuid";

export default function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
/*
In the new "ADD*BOOK" case, we're checking to see if an authorName matches with the name dispatches from the BookInput component. If the name already exists, state is returned unchanged. If the name is not present, it is added to the author array. Use the example above to modify the manageAuthorsAndBooks reducer and you can see the effect. We have two separate forms, one for adding just authors, and one that adds books _and* authors.

Note: We're using a useful package, uuid, to handle unique ID generation. With this refactor, since we are creating an author ID from within the reducer instead of in AuthorInput.js, we need to import it here as well.
*/
    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    default:
      return state;
  }
}
