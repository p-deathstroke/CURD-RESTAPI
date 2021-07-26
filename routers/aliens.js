const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
	try {
		const aliens = await Alien.find();
		res.json(aliens);
	} catch (error) {
		res.send("Error" + error);
	}
});
router.get("/:id", async (req, res) => {
	try {
		const alien = await Alien.findById(req.params.id);
		res.json(alien);
	} catch (error) {
		res.send("Error" + error);
	}
});

router.post("/", async (req, res) => {
	const alien = new Alien({
		name: req.body.name,
		planet: req.body.planet,
		age: req.body.age,
	});
	try {
		const data = await alien.save();
		res.json(data);
	} catch (error) {
		res.send("Error" + error);
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const alien = await Alien.findById(req.params.id);
		alien.planet = req.body.planet;
		const data1 = await alien.save();
		res.json(data1);
	} catch (error) {
		res.send("Error" + error);
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const alien = await Alien.findOneAndDelete(req.params.id);
		res.send("Alien Deleted");
	} catch (error) {
		res.send("Error" + error);
	}
});

module.exports = router;
