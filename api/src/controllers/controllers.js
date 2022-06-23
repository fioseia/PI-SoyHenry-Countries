const { formatingILikeQuery } = require('../helpers/helpers');
const { Country, Activity, Op } = require('../db');

let filterCountries = async (query, body) => {
	const { name } = body;
	let filteredCountries;
	if (Object.keys(query).length || body) {
		let iLikeQuery = formatingILikeQuery(query, Op.iLike);
		filteredCountries = await Country.findAll({
			where: {
				[Op.or]: [
					{ ...iLikeQuery },
					{
						'$Activities.name$': { [Op.iLike]: '%' + name + '%' },
					},
				],
			},
			attributes: ['name', 'image', 'continent'],
			include: Activity,
		});
	} else {
		filteredCountries = await Country.findAll({
			attributes: ['name', 'image', 'continent'],
		});
	}
	return filteredCountries;
};

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
}) => {
	let newActivity = await Activity.create({
		name,
		difficulty,
		duration,
		season,
	});

	if (countriesId) await newActivity.addCountries(countriesId);
};

module.exports = {
	filterCountries,
	getCountryDetails,
	createNewActivity,
};
