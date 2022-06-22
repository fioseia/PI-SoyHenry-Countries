const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
	const { name } = req.query;
	try {
		let allCountries = await Country.findAll({
			attributes: ["name", "image", "continent"],
		});
		if (name) {
			let filteredCountries = await allCountries.filter((el) =>
				el.name.toLowerCase().includes(name.toLowerCase())
			);
			res.status(200).json(filteredCountries);
		} else {
			res.status(200).json(allCountries);
		}
	} catch (e) {
		res.status(404).json({ error: e.message });
	}
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		let countryDetail = await Country.findOne({
			where: {
				id: id.toUpperCase(),
			},
			include: Activity,
		});
		if (countryDetail) res.status(200).json(countryDetail);
		else res.status(404).send("Country Not Found");
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

module.exports = router;
