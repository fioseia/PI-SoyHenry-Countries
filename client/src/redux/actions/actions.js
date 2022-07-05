import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_ORDER_POP = 'SET_ORDER_POP';
export const SET_ORDER_NAME = 'SET_ORDER_NAME';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const POST_ACTIVITY = 'POST_ACTIVITY';

export const getAllCountries = () => {
	return function (dispatch) {
		return axios
			.get('/countries')
			.then((data) => dispatch({ type: GET_ALL_COUNTRIES, payload: data.data }))
			.catch((error) => console.log(error));
	};
};

export const getFilteredCountries = ({
	name,
	continent,
	category,
	subcategory,
}) => {
	return function (dispatch) {
		return axios
			.get(
				`/countries?name=${encodeURI(name)}&continent=${encodeURI(
					continent
				)}&category=${encodeURI(category)}&subcategory=${encodeURI(
					subcategory
				)}`
			)
			.then((data) =>
				dispatch({ type: GET_FILTERED_COUNTRIES, payload: data.data })
			)
			.catch((error) => console.log(error));
	};
};

export const getCategories = () => {
	return function (dispatch) {
		return axios
			.get(`/activities`)
			.then((data) => dispatch({ type: GET_CATEGORIES, payload: data.data }))
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

export const getCountryDetails = (id) => {
	return function (dispatch) {
		return axios
			.get(`/countries/${id}`)
			.then((data) =>
				dispatch({ type: GET_COUNTRY_DETAILS, payload: data.data })
			)
			.catch((error) => console.log(error));
	};
};

export const addActivity = (data) => {
	let { name, difficulty, duration, season, countriesId, subcategoryId } = data;
	var json = JSON.stringify({
		name,
		difficulty,
		duration,
		season,
		countriesId,
		subcategoryId,
	});
	axios({
		method: 'post',
		url: '/activities',
		headers: {
			'Content-Type': 'application/json',
		},
		data: json,
	})
		.then((response) => alert(JSON.stringify(response.data)))
		.catch((error) => console.log(error));
};

// var config = {
//   method: 'post',
//   url: 'http://localhost:3001/activities',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
