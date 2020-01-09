import { combineReducers } from "redux";
// combineReudcers is coming of Redux
const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
});
export default rootReducer;