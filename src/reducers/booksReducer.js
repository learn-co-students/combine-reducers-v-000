
function booksReducer(state = [], action)

{
    let idx;
       switch(action.type) {
    case "ADD_BOOK":
       return [...state, action.book ];

   case "REMOVE_BOOK":
        idk = state.findIndex(book => book.id === action.id)

               return [...state.slice(0, idk), state.slice(idk + 1)];
       
        
          
           default:
               return state;
    }
}