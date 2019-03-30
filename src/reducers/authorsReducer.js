
import uuid from 'uuid' // handles unique ID generation

function authorsReducer(state = [], action) {

	let idx
	switch (action.type) {
		case 'ADD_AUTHOR':
			return [...state, action.author]

		case 'REMOVE AUTHOR':
			idx = state.indexOf(action.id)
			/* 
			  Slice will create a new array. We create two arrays: from beggining to index and 
	      	  from index+1 to end. Then we apply the spread operator (...) to take the items
	      	  of those arrays and create a new single array containing all the items we need
	      	*/
			return [...state.slice(0, idx),
					...state.slice(idx + 1)]
			/* filter() will create a new array, omitting the specified index */	
			// ...state.authors.filter(author => author.id !== idx)

		/*
		   In the new "ADD*BOOK" case, we're checking to see if an authorName matches with 
		   the name dispatched from the BookInput component. If the name already exists, state 
		   is returned unchanged. If the name is not present, it is added to the author array.
		*/
		case 'ADD_BOOK':
			let existingAuthor = state.filter(
				author => author.authorName === action.book.authorName
			)
			if (existingAuthor.length > 0) {
				return state
			} else {
				return [...state, { authorName: action.book.authorName, id: uuid() }]
			}

		default:

			return state
	}
}

export default authorsReducer