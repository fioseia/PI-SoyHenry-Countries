export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_ORDER_POP = 'SET_ORDER_POP';
export const SET_ORDER_NAME = 'SET_ORDER_NAME';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const POST_ACTIVITY = 'POST_ACTIVITY';

const PATH = 'http://localhost:3001';

export const getAllCountries = () => {
	return function (dispatch) {
		fetch(`${PATH}/countries`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_ALL_COUNTRIES, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const getFilteredCountries = ({
	name,
	continent,
	category,
	subcategory,
}) => {
  console.log(continent)
	return function (dispatch) {
		fetch(
			`${PATH}/countries?name=${encodeURI(name)}&continent=${encodeURI(
				continent
			)}&category=${encodeURI(category)}&subcategory=${encodeURI(
				subcategory
			)}`
		)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_FILTERED_COUNTRIES, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const getCategories = () => {
	return function (dispatch) {
		fetch(`${PATH}/activities`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_CATEGORIES, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const sortCountriesPop = (order) => {
	return function (dispatch) {
		dispatch({ type: SET_ORDER_POP, payload: order });
	};
};

export const sortCountriesName = (order) => {
	return function (dispatch) {
		dispatch({ type: SET_ORDER_NAME, payload: order });
	};
};
