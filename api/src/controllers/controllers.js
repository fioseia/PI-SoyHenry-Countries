const { Country, Activity, Op } = require('../db');

let getCountryDetails = async (id) => {
	return await Country.findOne({
		where: {
			id: id.toUpperCase(),
		},
		include: Activity,
	});
};

let createNewActivity = async ({
	name,
	difficulty,
	duration,
	season,
	countriesId,
	subcategoryId,
}) => {
	let newActivity = await Activity.create({
		name,
		difficulty,
		duration,
		season,
	});

	if (countriesId) await newActivity.addCountries(countriesId);
	if (subcategoryId) await newActivity.setSubcategory(subcategoryId);
};

module.exports = {
	getCountryDetails,
	createNewActivity,
};
