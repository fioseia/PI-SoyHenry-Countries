import { GET_ALL_COUNTRIES } from '../actions/actions';

let initialState = {
	countries: [],
	country: {},
};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			return {
				...state,
				countries: action.payload,
			};
		default:
			return { ...state };
	}
};

export default countriesReducer;
