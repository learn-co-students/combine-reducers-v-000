function booksReducer(state = [], action) {
	let idx
	switch (action.type) {
		case 'ADD_BOOK':
			return [...state, action.book]

		case 'REMOVE_BOOK':
			idx = state.indexOf(action.id)
			/* 
			  Slice will create a new array. We create two arrays: from beggining to index and 
	      	  from index+1 to end. Then we apply the spread operator (...) to take the items
	      	  of those arrays and create a new single array containing all the items we need
	      	*/
			return [...state.slice(0, idx),
					...state.slice(idx + 1)]
			/* filter() will create a new array, omitting the specified index */
			// ...state.books.filter(book => book.id !== idx)

		default:

			return state
	}
}

export default booksReducer