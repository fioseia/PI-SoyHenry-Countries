const axios = require("axios");
const { Country } = require("../db");
const { API_MAIN } = process.env;

const dbInstance = async () => {
	const apiData = await axios.get(API_MAIN);
	if (apiData.length < 1) throw new Error("Api Data not found");

	let utilApiData = apiData.data.map((el) => {
		return {
			id: el.cca3,
			name: el.name.common,
			image: el.flags[0],
			continent: el.continents.join(" - "),
			capital: el.capital ? el.capital.join(" - ") : "No capital",
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
	console.log("DATABASE READY");
};

module.exports = {
	dbInstance,
};
