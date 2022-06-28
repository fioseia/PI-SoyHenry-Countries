const axios = require('axios');
const { Country, Category, Subcategory } = require('../db');
const { API_MAIN } = process.env;

const categories = [
	{ id: 1, name: 'sports' },
	{ id: 2, name: 'gastronomy' },
	{ id: 3, name: 'cultural' },
	{ id: 4, name: 'nature' },
	{ id: 5, name: 'nigth life' },
	{ id: 6, name: 'others' },
];

const subcategories = [
	{ id: 1, name: 'water sports', CategoryId: 1 },
	{ id: 2, name: 'winter sports', CategoryId: 1 },
	{ id: 3, name: 'cycling', CategoryId: 1 },
	{ id: 4, name: 'climbing', CategoryId: 1 },
	{ id: 5, name: 'running', CategoryId: 1 },
	{ id: 6, name: 'popular sports', CategoryId: 1 },
	{ id: 7, name: 'local gastronomy', CategoryId: 2 },
	{ id: 8, name: 'wine tours', CategoryId: 2 },
	{ id: 9, name: 'exotic gastronomy', CategoryId: 2 },
	{ id: 10, name: 'gourmet gastronomy', CategoryId: 2 },
	{ id: 11, name: 'museums', CategoryId: 3 },
	{ id: 12, name: 'historical constructions', CategoryId: 3 },
	{ id: 13, name: 'modern constructions', CategoryId: 3 },
	{ id: 14, name: 'festivals', CategoryId: 3 },
	{ id: 15, name: 'thematic parks', CategoryId: 3 },
	{ id: 16, name: 'mountains', CategoryId: 4 },
	{ id: 17, name: 'forest', CategoryId: 4 },
	{ id: 18, name: 'local fauna', CategoryId: 4 },
	{ id: 19, name: 'beach', CategoryId: 4 },
	{ id: 20, name: 'national parks', CategoryId: 4 },
	{ id: 21, name: 'green spots', CategoryId: 4 },
	{ id: 22, name: 'ecology', CategoryId: 4 },
	{ id: 23, name: 'pubs', CategoryId: 5 },
	{ id: 24, name: 'night clubs', CategoryId: 5 },
	{ id: 25, name: 'others', CategoryId: 6 },
];

const dbInstance = async () => {
	const apiData = await axios.get(API_MAIN);
	if (apiData.length < 1) throw new Error('Api Data not found');

	let utilApiData = apiData.data.map((el) => {
		return {
			id: el.cca3,
			name: el.name.common,
			image: el.flags[0],
			continent: el.continents.join(' - '),
			capital: el.capital ? el.capital.join(' - ') : 'No capital',
			subregion: el.subregion ? el.subregion : null,
			area: el.area ? el.area : 0,
			population: el.population ? el.population : 0,
		};
	});

	utilApiData.forEach(
		async ({
			id,
			name,
			image,
			continent,
			capital,
			subregion,
			area,
			population,
		}) =>
			await Country.findOrCreate({
				where: { id: id },
				defaults: {
					name,
					image,
					continent,
					capital,
					subregion,
					area,
					population,
				},
			})
	);

	await Category.bulkCreate(categories);
  await Subcategory.bulkCreate(subcategories);

	console.log('DATABASE READY');
};

module.exports = {
	dbInstance,
};
