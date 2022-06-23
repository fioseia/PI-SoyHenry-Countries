const { Router } = require('express');
const { filterCountries, getCountryDetails } = require('../controllers/controllers');
const router = Router();

router.get('/', async (req, res) => {
	try {
		let response = await filterCountries(req.query, req.body);
		res.status(200).json(response);
	} catch (e) {
		res.status(404).json({ error: e.message });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let countryDetail = await getCountryDetails(id)
		if (countryDetail) res.status(200).json(countryDetail);
		else res.status(404).send('Country Not Found');
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
