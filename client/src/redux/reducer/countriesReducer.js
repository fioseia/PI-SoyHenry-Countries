import {
	GET_ALL_COUNTRIES,
	GET_FILTERED_COUNTRIES,
	SET_ORDER_POP,
	SET_ORDER_NAME,
	GET_COUNTRY_DETAILS,
	RESET_COUNTRY_DETAIL,
} from '../actions/actions';

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

		case GET_FILTERED_COUNTRIES:
			return {
				...state,
				countries: action.payload,
			};

		case SET_ORDER_NAME:
			action.payload === 'asc'
				? state.countries.sort((a, b) => a.name.localeCompare(b.name))
				: state.countries.sort((a, b) => b.name.localeCompare(a.name));

			return {
				...state,
				countries: [...state.countries],
			};

		case SET_ORDER_POP:
			action.payload === 'asc'
				? state.countries.sort((a, b) => a.population - b.population)
				: state.countries.sort((a, b) => b.population - a.population);

			return {
				...state,
				countries: [...state.countries],
			};
		case GET_COUNTRY_DETAILS:
			return {
				...state,
				country: action.payload,
			};

		case RESET_COUNTRY_DETAIL:
			return {
				...state,
				country: action.payload,
			};

		default:
			return { ...state };
	}
};

export default countriesReducer;
