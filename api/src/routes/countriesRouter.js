const { Router } = require('express');
const { Country, Activity, Category, Subcategory, Op } = require('../db');
const { getCountryDetails } = require('../controllers/controllers');
const router = Router();

router.get('/', async (req, res) => {
	const { name, category, subcategory } = req.query;
	try {
		if (name || category || subcategory) {
			response = await Country.findAll({
				where: {
					name: { [Op.iLike]: '%' + name + '%' },
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
				attributes: ['name', 'image', 'continent', 'id'],
			});
		} else {
			response = await Country.findAll({
				attributes: ['name', 'image', 'continent', 'id'],
			});
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
