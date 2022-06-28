export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_FILTERED_COUNTRIES = 'GET_FILTERED_COUNTRIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_CATEGORIES = 'GET_CATEGORIES';

const PATH = 'http://localhost:3001';

export const getAllCountries = () => {
	return function (dispatch) {
		fetch(`${PATH}/countries`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_ALL_COUNTRIES, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const getFilteredCountries = ({ name, category, subcategory }) => {
	return function (dispatch) {
		fetch(
			`${PATH}/countries?name=${encodeURI(name)}&category=${encodeURI(
				category
			)}&subcategory=${encodeURI(subcategory)}`
		)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_ALL_COUNTRIES, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const getCategories = ()=>{
  return function (dispatch) {
    fetch(`${PATH}/activities`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CATEGORIES, payload: data }))
      .catch((error) => console.log(error));
  };
}