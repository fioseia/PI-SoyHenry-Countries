const { Router } = require('express');
const { Activity } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
	const { name, difficulty, duration, season, countriesId } = req.body;
	try {
		let newActivity = await Activity.create({
			name,
			difficulty,
			duration,
			season,
		});
		await newActivity.addCountries(countriesId);
		res.status(201).send('activity created');
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
