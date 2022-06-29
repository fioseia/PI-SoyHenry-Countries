const { Country, Activity, Subcategory, Category, Op } = require('../db');

let getCountries = async () => {
	try {
		let response = await Country.findAll({
			attributes: ['name', 'image', 'continent', 'id', 'population'],
		});
		return response;
	} catch (e) {
		return { error: e.message };
	}
};

let filteredCountries = async (name, continent, category, subcategory) => {
	try {
		let response = await Country.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
				continent: {
					[Op.iLike]: `%${continent}%`,
				},
			},
			include: [
				{
					model: Activity,
					required: category || subcategory ? true : false,
					attributes: [],
					include: [
						{
							model: Subcategory,
							where: subcategory ? { name: subcategory.toLowerCase() } : {},
							attributes: [],
							include: [
								{
									model: Category,
									where: category ? { name: category.toLowerCase() } : {},
									attributes: [],
								},
							],
						},
					],
				},
			],
			attributes: ['name', 'image', 'continent', 'id', 'population'],
		});
		return response;
	} catch (e) {
		return { error: e.message };
	}
};

let getCountryDetails = async (id) => {
	let response = await Country.findOne({
		where: {
			id: id.toUpperCase(),
		},
		include: [{ all: true, nested: true }],
	});

	let obj = {
		name: response.name,
		image: response.image,
		continent: response.continent,
		population: response.population,
		activities: response.Activities.length
			? response.Activities.map((activity) => {
					return {
						name: activity.name,
						difficulty: activity.difficulty,
						duration: activity.duration,
						season: activity.season,
						subcategories: activity.Subcategory.name,
						categories: activity.Subcategory.Category.name,
					};
			  })
			: [],
	};
	return obj;
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
	getCountries,
	filteredCountries,
	getCountryDetails,
	createNewActivity,
};
