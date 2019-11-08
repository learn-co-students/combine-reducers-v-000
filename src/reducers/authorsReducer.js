function authorsReducer(state = [], action) {
    let idx;
    switch (action.type) {
        case "ADD_AUTHOR":
            return [...state, action.author];
        
        case "REMOVE_AUTHOR:
// note "idx" is find the index of specific author that matches our authors ID.
            idx = state.findIndex(author => author.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        
           /*
            // when user submits a book  and includes the author.
            // the code below checks if we have it in the authors lists
            //  if not, it adds it 

            */
        case "ADD_BOOK":
            let exisitingAuthor = state.filter(
                author => author.authorName === action.book.authorName
                
            );
            if (exisitingAuthor.length > 0) {
                return state;
            } else {
                return [...state, { authorName: action.book.authorName, id: uuid() }];
            }

            // ....................
        default:
            return state;
     }
  }