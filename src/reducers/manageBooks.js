// Our books reducer function
export default function manageBooks(state = [], action) {
    let idx
    switch (action.type) {

        case "ADD_BOOK":
            return {
                books: [...state, action.book]
            };

        case "REMOVE_BOOK":
            idx = state.indexOf(action.id);
            return {
                books: [
                    ...state.slice(0, idx),
                    ...state.slice(idx + 1),
                ]
            };

        default:
            return state;
    }
};  