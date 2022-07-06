const { Router } = require('express');
const { createNewActivity } = require('../controllers/controllers');
const { Category, Subcategory } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
	try {
		await createNewActivity(req.body);
		res.status(201).send('activity created');
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

router.get('/', async (req, res) => {
	try {
		let response = await Category.findAll({
			attributes: ['name'],
			include: [
				{
					model: Subcategory,
					attributes: ['name','id'],
				},
			],
		});
		res.status(200).json(response);
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
