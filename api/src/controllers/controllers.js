const { formatingILikeQuery } = require('../helpers/helpers');
const { Country, Activity, Op } = require('../db');

let filterCountries = async (query, body) => {
	const { name } = body;
	let filteredCountries;
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
