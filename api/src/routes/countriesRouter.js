const { Router } = require('express');
const {
	getCountryDetails,
	filteredCountries,
	getCountries,
} = require('../controllers/controllers');

const router = Router();

router.get('/', async (req, res) => {
	const { name, continent, category, subcategory } = req.query;

	try {
		if (name || continent || category || subcategory) {
			response = await filteredCountries(
				name,
				continent,
				category,
				subcategory
			);
		} else {
			response = await getCountries();
		}
		res.status(200).json(response);
	} catch (e) {
		res.status(404).json({ error: e.message });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let countryDetail = await getCountryDetails(id);
		if (countryDetail) res.status(200).json(countryDetail);
		else res.status(404).send('Country Not Found');
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
