const { Router } = require('express');
const { createNewActivity } = require('../controllers/controllers');


const router = Router();

router.post('/', async (req, res) => {
	try {
    createNewActivity(req.body)
		res.status(201).send('activity created');
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
