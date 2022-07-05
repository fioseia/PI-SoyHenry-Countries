import { GET_CATEGORIES } from '../actions/actions';

let initialState = {
	activities: [],
	categories: {},
};

const activitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
      console.log(action.payload)
			let obj = {};
			action.payload.forEach((cat) => {
				obj[cat.name] = [{name:'All'}, ...cat.Subcategories];
			});
			return {
				...state,
				categories: { All: [], ...obj },
			};
		default:
			return { ...state };
	}
};

export default activitiesReducer;
