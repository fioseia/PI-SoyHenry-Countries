let initialState = {
	current: 1,
	cardsPerPage: 10,
	totalPages: 0,
};

const paginationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEXT_PAGE':
			return {
				...state,
				current: state.current + 1,
			};
		case 'PREV_PAGE':
			return {
				...state,
				current: state.current <= 1 ? 1 : state.current - 1,
			};
		case 'FIRST_PAGE':
			return {
				...state,
				current: 1,
			};
		case 'LAST_PAGE':
			return {
				...state,
				current: state.totalPages,
			};
		case 'SET_TOTAL_PAGES':
			return {
				...state,
				totalPages: Math.ceil((action.payload - 9) / state.cardsPerPage) + 1,
			};
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				current: action.payload,
			};
		default:
			return { ...state };
	}
};

export default paginationReducer;
